void main() {
  // Alterar o valor da variável inputNumber  
  int inputNumber = 11;
  print(sumMultiplesOf3or5(inputNumber));
}

sumMultiplesOf3or5(int num) {
  int sum = 0;
  if (num <= 0) {
    return "Informe um número maior que 0(zero)";
  } else {
    for (int i = 0; i < num; i++) {
      if (isMultipleOf3(i) || isMultipleOf5(i)) {
        sum += i;
      }
    }
    return sum;
  }
}

bool isMultipleOf3(int num) {
  return num % 3 == 0;
}

bool isMultipleOf5(int num) {
  return num % 5 == 0;
}