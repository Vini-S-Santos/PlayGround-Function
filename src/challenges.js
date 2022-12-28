// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  let calculo = base * height / 2;
  return calculo;
}

// Desafio 3
function splitSentence(string) {
  const resultado = string.split(" ", 3); //palavra.separa(separador ex "", limit da array)
  return resultado;
}

// Desafio 4
function concatName(Array) {
  const resultado = Array[Array.length - 1] + ", " + Array[0]; // array.lenght - na ultima posição + array na primeira posição
  return resultado;
}

// Desafio 5
function footballPoints(numero1, numero2) {
  let wins = 3;
  let ties = 1;
  resultado = wins * numero1 + ties * numero2;
  return resultado;
}

// Desafio 6
function highestCount(Array) {
  let maior = Array[0];
  let cont = 0;

  for (let index = 0; index < Array.length; index += 1) { // quando o array[index] for maior que o setado na let maior armazene em maior
    if (Array[index] > maior) {
      maior = Array[index];
    }
  }
  for (let i = 0; i < Array.length; i += 1) { //quando o valor do array[index] for estritamente maior que o meu let maior conte +1 no let cont
    if (maior === Array[i]) {
      cont += 1;
    }
  }
  return cont;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let presa = mouse;
  posicaoCat1 = Math.abs(cat1 - presa);    //armazena o valor absoluto de cat1 - presa
  posicaoCat2 = Math.abs(cat2 - presa);    //armazena o valor absoluto de cat2 - presa

  if (posicaoCat1 > posicaoCat2) {
    return 'cat2';
  } else if (posicaoCat1 < posicaoCat2) {
    return 'cat1';
  } else if (posicaoCat1 === posicaoCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(Array) {
  let resultado = [];
  for (let index = 0; index < Array.length; index += 1) {
    if (Array[index] % 3 === 0) {
      if (Array[index] % 5 === 0) {
        resultado.push('fizzBuzz');
      } else {
        resultado.push('fizz');
      }
    } else if (Array[index] % 5 === 0) {
      resultado.push('buzz');
    } else if (Array[index] % 3 !== 0 && Array[index] % 5 !== 0) {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  array = [];
  for (let index = 0; index < string.length; index += 1) {
    array.push(string[index]);
  }
  for (let Index = 0; Index < array.length; Index += 1) {
    if (array[Index] === 'a') {
      array[Index] = 1
    }
    else if (array[Index] === 'e') {
      array[Index] = 2
    }
    else if (array[Index] === 'i') {
      array[Index] = 3
    }
    else if (array[Index] === 'o') {
      array[Index] = 4
    }
    else if (array[Index] === 'u') {
      array[Index] = 5
    }
    else { }
  }
  return array.join('');
}

function decode(string) {
  array = [];
  for (let index = 0; index < string.length; index += 1) {
    array.push(string[index]);
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '1') {
      array[index] = 'a'
    }
    else if (array[index] === '2') {
      array[index] = 'e'
    }
    else if (array[index] === '3') {
      array[index] = 'i'
    }
    else if (array[index] === '4') {
      array[index] = 'o'
    }
    else if (array[index] === '5') {
      array[index] = 'u'
    }
    else { }
  }
  return array.join('');
}

// Desafio 10
function techList(tech, name) {
  tech = tech.sort();  //tech = ela mesma ordenada
  techs = [];     // armazena techs em array
  for (index in tech) {  // laço de repetição de index em tech
    techs.push(          // empurrando no array re techs
      {
        tech: tech[index],    // empurrando com a estrutura de objeto
        name: name,
      }
    )
  }
  if (tech.length === 0) {    // se o tamanho da array de tech for igual a 0 retornar vazio
    return 'Vazio!';
  }
  else {
    return techs;              //se não retorne o array de objetos techs
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
