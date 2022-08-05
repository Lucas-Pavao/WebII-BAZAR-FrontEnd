const URL = "http://localhost:8080";

document.getElementById("btnMostra").addEventListener("click", mostrar);

async function mostrar(target) {
  target.preventDefault();
  const divmain = document.getElementById("mainDiv");

  fetch(URL + "/produto", { Method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status == 404) {
        divmain.innerHTML = "produto não encontrado";
        return;
      } else if (data.status == 500) {
        divmain.innerHTML = "Problema com a requisição";
        return;
      }
      console.log(data);
      let { codigo, nome, descricao } = data;
      for (let i = 0; i < data.length; i++) {
        divmain.innerHTML = `<table>
    <tr>
    <th>codigo</th>
    <th>nome</th>
    <th>descrição</th>
    </tr>
    <tr>
    <td>${codigo}</td>
    <td>${nome}</td>
    <td>${descricao}</td>
    </tr>
    </table>`;
      }
    })
    .catch((erro) => {
      alert(erro);
    });
}
