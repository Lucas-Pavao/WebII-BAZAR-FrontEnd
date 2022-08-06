const URL = "http://localhost:8080";
async function rq1() {
  fetch(URL + `/lote`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let allLotes = data;
      console.log(allLotes);
      let html = "";
      for (var i = 0; i < allLotes.length; i++) {
        html +=
          "<option id='loteSelect' value=" +
          allLotes[i].id +
          ">" +
          allLotes[i].id +
          " - " +
          allLotes[i].observacao +
          "</option>";
      }

      document.getElementById("lotes").innerHTML = html;
    });
}
rq1();
document
  .getElementById("btnCadastro")
  .addEventListener("click", cadastraProduto);
async function cadastraProduto() {
  const idLote = document.getElementById("lotes").value;
  const codigoProd = document.getElementById("pCode").value;
  const nomeProd = document.getElementById("pNome").value;
  const descricaoProd = document.getElementById("pDescricao").value;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nomeProd,
      codigo: codigoProd,
      descricao: descricaoProd,
      idLote: idLote,
    }),
  };

  await fetch("http://localhost:8080/produto", requestOptions)
    .then((response) => response.json())
    .then((window.location.href = "cadastroProduto.html"));
}
