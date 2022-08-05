const URL = "http://localhost:8080";

document.getElementById("btnCadastro").addEventListener("click", onSubmit);
async function onSubmit(target) {
  target.preventDefault();

  const json = {};

  const dataForm = new FormData(document.getElementById("formCadastro"));

  for ([key, value] of dataForm) {
    json[key] = value;
  }

  console.log(json);
  fetch(URL + "/produto", {
    method: "POST",
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
