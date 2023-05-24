import axios from "axios";

export function getMagazines() {
  return axios
    .get("http://127.0.0.1:8000/magazines/")
    .then((response) => response.data);
}

export function deleteMagazine(Id) {
  return axios
    .delete("http://127.0.0.1:8000/magazines/" + Id + "/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
}

export function addMagazine(magazine) {
  return axios
    .post("http://127.0.0.1:8000/magazines/", {
      Id: null,
      Czasopismo: magazine.Czasopismo.value,
      Nr: magazine.Nr.value,
      Data: magazine.Data.value,
      Dzial: magazine.Dzial.value,
      Artykol: magazine.Artykol.value,
      Autor: magazine.Autor.value,
      Uwagi: magazine.Uwagi.value,
    })
    .then((response) => response.data);
}

export function updateMagazine(Id, magazine) {
  return axios
    .put("http://127.0.0.1:8000/magazines/" + Id + "/", {
      Czasopismo: magazine.Czasopismo.value,
      Nr: magazine.Nr.value,
      Data: magazine.Data.value,
      Dzial: magazine.Dzial.value,
      Artykol: magazine.Artykol.value,
      Autor: magazine.Autor.value,
      Uwagi: magazine.Uwagi.value,
    })
    .then((response) => response.data);
}
