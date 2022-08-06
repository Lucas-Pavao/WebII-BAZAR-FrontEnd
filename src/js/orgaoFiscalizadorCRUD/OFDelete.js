const URL = "http://localhost:8080";

document.getElementById("btnDeletar").addEventListener("click", onSubmit);
async function onSubmit(target) {
  target.preventDefault();

  const json = {};
  const idOF = document.getElementById("idOF").value;
  const dataForm = new FormData(document.getElementById("formdelete"));

  for ([key, value] of dataForm) {
    json[key] = value;
  }

  console.log(idOF);
  fetch(URL + `/fiscalizador/${idOF}`, {
    method: "DELETE",
    body: JSON.stringify(json),
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
