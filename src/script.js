  bitcoinRate = prompt('What is Bitcoin price today?');

  ammountOfDollars = prompt('How much $ do you have?');

  let sum = (parseFloat(ammountOfDollars) / parseFloat(bitcoinRate)).toFixed(4);

  let text1 = ('What is Bitcoin price today?');
  let text2 = ('How much $ do you have?');
  let text3 = (`${text1} - ${bitcoinRate}$ <br> ${text2} - ${ammountOfDollars}$ <br> You can buy: ${sum} BTC`);


  document.querySelector('#header').innerHTML = text3


  console.log(text3)