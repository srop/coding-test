const fetch = require("node-fetch");

async function thisIsSyncFunction() {
  let result = 0;

  await fetch("https://codequiz.azurewebsites.net/data")
    .then(res => res.json())
    .then(response => {
      result = response.data;
    });
  return result;
}

thisIsSyncFunction()
  .then(res => {
    const number1 = res;
    console.log(number1);
    const calculation = number1 * 10;
    console.log(calculation);
  })
  .catch(e => console.log(e));
