const URL = "http://localhost:8080";

document.getElementById("btnDeletar").addEventListener("click", onSubmit);
async function onSubmit(target) {
  target.preventDefault();

  const json = {};
  const idOD = document.getElementById("idOD").value;
  const dataForm = new FormData(document.getElementById("formdelete"));

  for ([key, value] of dataForm) {
    json[key] = value;
  }

  console.log(idOD);
  fetch(URL + `/donatario/${idOD}`, {
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
