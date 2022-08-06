const URL = "http://localhost:8080";

document.getElementById("btnBusca").addEventListener("click", buscarId);

async function buscarId(target) {
  target.preventDefault();
  const idOD = document.getElementById("idProd").value;
  const divmain = document.getElementById("mainDiv");

  fetch(URL + `/produto/${idOD}`, { Method: "GET" })
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
      let { codigo, nome, descricao, id_lote } = data;

      divmain.innerHTML = `<h3>${codigo}-${nome}</h3>
                                <br/>
                                Descrição: ${descricao}
                                Descrição: ${id_lote}`;
    })
    .catch((erro) => {
      alert(erro);
    });
}
