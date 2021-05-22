const urlCoin = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cxrp%2Cdogecoin%2Cpolkadot&vs_currencies=USD%2CEUR%2CNOK";

async function getCoins() {
  try {
    const response = await fetch(urlCoin);
    const getResults = await response.json();

    printHTML(getResults);
  }

  catch (error) {
    console.log(error);
    document.querySelector("#live-price").innerHTML = message("error", error);
  }
}

getCoins();

function printHTML(coins) {
  const livedata = document.querySelector("#live-price");
  var coinData = Object.values(coins);
  livedata.innerHTML += `<div class="data">`;

  livedata.innerHTML +=
    `<div>
    <p>BTC</p> <p class="price_color">USD: ${coins.bitcoin.usd}</p>
    </div>
    <div>
    <p>ETH</p> <p class="price_color">USD: ${coins.ethereum.usd}</p>
    </div>
    <div>
    <p>DOGE</p> <p class="price_color">USD: ${coins.dogecoin.usd}</p>
    </div>
    <div>
    <p>DOT</p> <p class="price_color">USD: ${coins.polkadot.usd}</p>
    </div>`;


  livedata.innerHTML += `</div >`;
}