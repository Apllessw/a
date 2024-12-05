1 
function concatStrings(a, b) {
  return a + b; // Возвращаем конкатенированную строку
}

export default concatStrings;

2 

function isString(value) {
  return typeof value === 'string'; // Проверяем тип значения
}

export default isString;

3 

function identifySign(num) {
  if (num > 0) {
    return 'Положительное число'; 
  } else if (num < 0) {
    return 'Отрицательное число';
  } else {
    return 'Ноль'; 
  }
}

export default identifySign;

4 


function reverseWords(text) {
  
  return text.split(' ').reverse().join(' ');
}


export default reverseWords

5

function wordsCount(text) {

  if (text.trim() === '') {
    return 0; 
  }
  return text.trim().split(/\s+/).length;
}

export default wordsCount;
