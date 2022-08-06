async function preencheSelectDonatario() {
  fetch(`http://localhost:8080/donatario`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let allDonatario = data;
      console.log(allDonatario);
      let html = "";
      for (var i = 0; i < allDonatario.length; i++) {
        html +=
          "<option id='optionSelectDonatario' value=" +
          allDonatario[i].id +
          ">" +
          allDonatario[i].id +
          " - " +
          allDonatario[i].nome +
          "</option>";
      }

      document.getElementById("orgaoDonatarioSelect").innerHTML = html;
    });
}
preencheSelectDonatario();

async function preencheSelectFiscalizador() {
  fetch(`http://localhost:8080/fiscalizador`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let allFiscalizador = data;
      console.log(allFiscalizador);
      let html = "";
      for (var i = 0; i < allFiscalizador.length; i++) {
        html +=
          "<option id='optionSelectFiscalizador' value=" +
          allFiscalizador[i].id +
          ">" +
          allFiscalizador[i].id +
          " - " +
          allFiscalizador[i].nome +
          "</option>";
      }

      document.getElementById("orgaoFiscalizadorSelect").innerHTML = html;
    });
}
preencheSelectFiscalizador();

document.getElementById("btnCadastro").addEventListener("click", cadastraLote);

async function cadastraLote() {
  const idLote = document.getElementById("idLote").value;
  const observacaoLote = document.getElementById("observacao").value;
  const idOrgaoDon = document.getElementById("orgaoDonatarioSelect").value;
  const idOrgaoFisc = document.getElementById("orgaoFiscalizadorSelect").value;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: idLote,
      observacao: observacaoLote,
      idOrgaoDonatario: idOrgaoDon,
      idOrgaoFiscalizador: idOrgaoFisc,
    }),
  };

  await fetch("http://localhost:8080/lote", requestOptions)
    .then((response) => response.json())
    .then((window.location.href = "cadastroLote.html"));
}
