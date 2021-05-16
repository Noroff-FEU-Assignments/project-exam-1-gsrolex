const urlCoin = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cxrp%2Cdogecoin%2Cpolkadot&vs_currencies=USD%2CEUR%2CNOK";

async function getCoins() {
  try {
    const response = await fetch(urlCoin);
    const getResults = await response.json();

    console.log("response", response);
    createHTML(getResults);
  }

  catch (error) {
    console.log(error);
    document.querySelector("#live-price").innerHTML = message("error", error);
  }
}

getCoins();

function createHTML(coins) {
  console.log(coins)
  const livedata = document.querySelector("#live-price");
  var coinData = Object.values(coins);
  console.log(coinData);
  livedata.innerHTML += `<div class="data">`;

  livedata.innerHTML +=
    `<p>BTC</br> USD: ${coins.get("usd")}</p>`;
  `<p>Doge USD: ${coinData[1].usd}</p>`;
  `<p>Polkadot USD: ${coinData[2].usd}</p>`;
  `<p>Polkadot USD: ${coinData[3].usd}</p>`;



  livedata.innerHTML += `</div > `;

  start(document);
}