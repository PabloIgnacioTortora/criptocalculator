const consumirApi = (criptoMoneda, moneda) => {
  fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("res").style.opacity = "1";
      document.getElementById("res").innerHTML = `<div class="title-price">
      <h2>${data.DISPLAY[criptoMoneda][moneda].PRICE}</h2>
      <span class="symbol">${data.DISPLAY[criptoMoneda][moneda].FROMSYMBOL}</span> 
      </div>
      
      <p>Máximo del día: <span class="data">${data.DISPLAY[criptoMoneda][moneda].HIGH24HOUR}</span></p> 
      <p>Mínimo del día: <span class="data">${data.DISPLAY[criptoMoneda][moneda].LOW24HOUR}</span></p> 
      <p>Variación diaria: <span class="data">${data.DISPLAY[criptoMoneda][moneda].CHANGEPCTDAY}%</span></p>
      <p>Última act: <span class="data">${data.DISPLAY[criptoMoneda][moneda].LASTUPDATE}</span></p>
      `;
    })
    .catch((err) => {
      console.log(err);
    });
};

function spinner() {
  document.getElementById("spinner").style.visibility = "visible";
  setTimeout(hidden, 1500);
}

function hidden() {
  document.getElementById("spinner").style.visibility = "hidden";
}

document.querySelector("#btnCalcular").addEventListener("click", function () {
  let criptoMoneda = document.getElementById("criptomoneda").value;
  let moneda = document.getElementById("moneda").value;
  setTimeout(() => {
    consumirApi(criptoMoneda, moneda);
  }, 1000);
  spinner();
});
