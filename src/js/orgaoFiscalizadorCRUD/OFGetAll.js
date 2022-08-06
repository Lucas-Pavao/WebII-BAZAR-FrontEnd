const URL = "http://localhost:8080";

const listEl = document.getElementById("teste");
listEl.addEventListener("click", buscar);

async function buscar(target) {
  target.preventDefault();

  fetch(URL + `/fiscalizador`)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((od) => {
        listEl.insertAdjacentHTML(
          "beforeend",
          `<div >
    <div >
        <div >
          <h5 >${od.id} - ${od.nome}</h5>
          
         
          <p >${od.descricao}</p>
         
        </div>
      </div>
</div>`
        );
      })
    );
}
