const input = document.getElementById('input')
const result = document.querySelector('results')
const button = document.getElementById('button')
const fahren = document.getElementById('Fahrenheit')



function temperatureconverter(input) {
    valNum = parseFloat(input);
    document.getElementById("results").textContent=(valNum*1.8) + 32;
  }

  function calculate(Fahrenheit) {
    valNum = parseFloat(Fahrenheit);
    document.getElementById("fh").textContent=(valNum-32)/1.8;
  }
  