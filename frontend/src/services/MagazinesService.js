import axios from "axios";

export function getMagazines() {
  return axios
    .get("http://127.0.0.1:8000/magazines/")
    .then((response) => response.data);
}
