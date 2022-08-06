document.getElementById("btnMostra").addEventListener("click", mostrar);

async function mostrar(target) {
  target.preventDefault();
  const divmain = document.getElementById("mainDiv");

  fetch(URL + "/fiscalizador", { Method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status == 404) {
        divmain.innerHTML = "donatario não encontrado";
        return;
      } else if (data.status == 500) {
        divmain.innerHTML = "Problema com a requisição";
        return;
      }
      console.log(data);
      let { id, nome, endereco, telefone, horariofuncionamento, descricao } =
        data;
      for (let i = 0; i < data.length; i++) {
        divmain.innerHTML = `<table>
    <tr>
    <th>id</th>
    <th>nome</th>
    <th>endereco</th>
    <th>telefone</th>
    <th>horariofuncionamento</th>
    <th>descrição</th>
    </tr>
    <tr>
    <td>${id}</td>
    <td>${nome}</td>
    <td>${endereco}</td>
    <td>${telefone}</td>
    <td>${horariofuncionamento}</td>
    <td>${descricao}</td>
    </tr>
    </table>`;
      }
    })
    .catch((erro) => {
      alert(erro);
    });
}
