const URL = "http://localhost:8080";

document.getElementById("btnDeletar").addEventListener("click", deletar);

async function deletar(target) {
  target.preventDefault();
  const codigo = document.getElementById("codigo").value;

  const json = {};

  const dataForm = new FormData(document.forms[0]);

  for ([key, value] of dataForm) {
    json[key] = value;
  }

  fetch(`http://localhost:8080/produto/${codigo}`, {
    method: "DELETE",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      alert("Produto deletado com sucesso!");
    })
    .then(function (data) {})
    .catch(function (erro) {
      alert(erro);
    });
}
