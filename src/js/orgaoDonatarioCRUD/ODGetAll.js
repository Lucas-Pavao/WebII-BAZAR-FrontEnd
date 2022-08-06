const URL = "http://localhost:8080";

const listEl = document.getElementById("teste");
listEl.addEventListener("click", buscar);

async function buscar(target) {
  target.preventDefault();

  fetch(URL + `/donatario`)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((od) => {
        listEl.insertAdjacentHTML(
          "beforeend",
          `<div  >
    <div>
        <div  >
          <h5 >${od.id} - ${od.nome}</h5>
          
          <h6 >${od.endereco}<br> ${od.telefone}</h6>
          <h6 >${od.horariofuncionamento}</h6>
          <p >${od.descricao}</p>
         
        </div>
      </div>
</div>`
        );
      })
    );
}
