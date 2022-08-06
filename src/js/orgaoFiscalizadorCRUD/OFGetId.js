const URL = "http://localhost:8080";

document.getElementById("btnBusca").addEventListener("click", buscarId);

async function buscarId(target) {
  target.preventDefault();
  const idOF = document.getElementById("idOF").value;
  const divmain = document.getElementById("mainDiv");

  fetch(URL + `/fiscalizador/${idOF}`, { Method: "GET" })
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
      let { nome, descricao } = data;

      divmain.innerHTML = `<h3>${nome}</h3>
                                <br/>
                                Descrição: ${descricao}`;
    })
    .catch((erro) => {
      alert(erro);
    });
}
