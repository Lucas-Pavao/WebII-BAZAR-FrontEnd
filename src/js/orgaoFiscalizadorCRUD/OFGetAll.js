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
          `<div id="itens" class="posts-list row" >
    <div class="card mt-4 col-md-6 bg-ligt" style="width: 18rem;">
        <div  class="card-body">
          <h5 class="card-title">${od.id} - ${od.nome}</h5>
          
         
          <p class="card-text">${od.descricao}</p>
         
        </div>
      </div>
</div>`
        );
      })
    );
}
