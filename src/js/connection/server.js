import axios from "axios";

const URL = "http://localhost:8080";

async function readAll() {
  const response = await axios.get(URL + "/produto");
  console.log(response.data);
}

async function onSubmit() {
  const values = { nome: "celuar", descricao: "Não é um iphone" };
  const response = await axios.post(URL + "/produto", values);
  console.log(response);
}
