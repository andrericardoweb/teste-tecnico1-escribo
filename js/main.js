main();
//console.log(sumMultiplesOf3or5(10));

function main() {
  var buttonCalculate = document.querySelector('#button-calculate');
  buttonCalculate.addEventListener('click', handleButtonClick);

  var inputNumber = document.querySelector('#input-number');
  inputNumber.addEventListener('input', handleButtonClick);
  
  handleButtonClick()
}

function sumMultiplesOf3or5(num) {
  let sum = 0;
  if (num <= 0) {
    return "Informe um número maior que 0(zero)";
  } else {
    for (let i = 0; i < num; i++) {
      if (isMultipleOf3(i) || isMultipleOf5(i)) {
        sum += i;
      }
    }
    return sum;
  }
}

function isMultipleOf3(num) {
  return num % 3 === 0
}
function isMultipleOf5(num) {
  return num % 5 === 0
}

function handleButtonClick() {
  var inputNumber = document.querySelector('#input-number');
  var number = Number(inputNumber.value);

  var calculate = sumMultiplesOf3or5(number);

  var result = document.querySelector('#result');
  result.textContent = calculate
}

