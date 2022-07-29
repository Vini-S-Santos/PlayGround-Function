// Desafio 11
function generatePhoneNumber(array) {
  let checkSize = true;
  for (let number of array) {
    if (number < 0 || number > 9) {
      checkSize = false;
      break;
    }
  }
  let checkNumber = true;
  for (const number of array) {
    let count = 0;
    for (const number2 of array) {
      if (number === number2) {
        count += 1;
        if (count >= 3) {
          checkNumber = false;
          break
        }
      }
    }
  }
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  else if (checkSize === false || checkNumber === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  else {
    return "(" + array[0] + array[1] + ") " + array[2] +
      array[3] + array[4] + array[5] + array[6] + "-" + array[7] +
      array[8] + array[9] + array[10]

  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let soma = false;
  let subitracao = false;
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    soma = true;
  }

  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    subitracao = true;
  }

  if (soma == true && subitracao == true) {
    return true;
  }
  else {
    return false;
  }
}
// Desafio 13
function hydrate(str) {
  let sum = 0;
  let numbers = str.match(/\d+/g).map(Number);
  for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]
  }
  if (sum === 1) {
    return sum + ' ' + 'copo de água'
    
  }
  else {
    return sum + ' ' + 'copos de água'
  }

}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
