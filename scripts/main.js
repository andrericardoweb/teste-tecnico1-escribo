console.log(sumMultiplesOf3or5(10));

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

