from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Magazine
from .serializers import MagazineSerializer


class MagazineView(APIView):

    def get_magazine(self, pk):
        try:
            magazine = Magazine.objects.get(Id=pk)
            return magazine
        except Magazine.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_magazine(pk)
            serializer = MagazineSerializer(data)
        else:
            data = Magazine.objects.all()
            serializer = MagazineSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = MagazineSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Magazine Added Successfully",          safe=False)
        return JsonResponse("Failed to Add Magazine", safe=False)

    def put(self, request, pk=None):
        magazine_to_update = Magazine.objects.get(Id=pk)
        serializer = MagazineSerializer(
            instance=magazine_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Magazine updated Successfully", safe=False)
        return JsonResponse("Failed To Update Magazine")

    def delete(self, request, pk):
        magazine_to_delete = Magazine.objects.get(Id=pk)
        magazine_to_delete.delete()
        return JsonResponse("Magazine Deleted Successfully", safe=False)
