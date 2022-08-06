const listEl = document.querySelector("ul");

fetch(URL + `/donatario`)
  .then((response) => response.json())
  .then((data) =>
    data.forEach((od) => {
      listEl.insertAdjacentHTML(
        "beforeend",
        `<div id="itens" class="posts-list row" >
    <div class="card mt-4 col-md-6 bg-ligt" style="width: 18rem;">
        <div  class="card-body">
          <h5 class="card-title">${od.id} - ${od.nome}</h5>
          
          <h6 class="card-subtitle mb-2 text-muted">${od.endereco}<br> ${od.telefone}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${od.horarioFuncionamento}</h6>
          <p class="card-text">${od.descricao}</p>
          <button onclick="deletarDonatario(${od.id})" id="btn-deletar" type="submit" class="btn btn-outline-secondary">Deletar</button>
          <button onclick="editarDonatario(${od.id})" id="btn-editar" type="submit" class="btn btn-outline-secondary">Editar</button>
        </div>
      </div>
</div>`
      );
    })
  );
