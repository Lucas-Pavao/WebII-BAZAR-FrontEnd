const URL = "http://localhost:8080";

document.getElementById("btnDeletar").addEventListener("click", deletar);

async function deletar(target) {
  target.preventDefault();
  const idProd = document.getElementById("idProd").value;
  const divmain = document.getElementById("mainDiv");
  console.log(idProd);
  fetch(URL + `/produto/${idProd}`, {
    Method: "DELETE",
    headers: { "content-type": "application/json" },
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
      let { nome, descricao } = data;

      divmain.innerHTML = `<h3>${nome}</h3>
                              <br/>
                              Descrição: ${descricao}`;
    })
    .catch((erro) => {
      alert(erro);
    });
}
