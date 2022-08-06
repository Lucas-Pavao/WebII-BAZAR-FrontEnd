const URL = "http://localhost:8080";

document.getElementById("btnDeletar").addEventListener("click", onSubmit);
async function onSubmit(target) {
  target.preventDefault();

  const idProd = document.getElementById("idProd").value;

  console.log(idProd);
  await fetch(URL + `/produto/${idProd}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      alert(data);
    })
    .catch(function (erro) {
      alert(erro);
    });
}
