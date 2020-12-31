/*
  I 1
  V 5
  X 10
  L 50
  C 100
  D 500
  M 1000
*/

const divide = (num, divider) => Math.floor(num / divider);

const append = (num, char) => {
  const val = num >= 5 ? num % 5 || 0 : num || 0;

  if (val <= 3) {
    const arr = [];
    let i = 0;
  
    while(i !== val) {
      arr.push(char);
      i++;
    };

    return arr.join('');
  };

  return '';
};

const intToRoman = num => {
  const valI = num % 10;
  const valX = divide(num, 10);
  const valC = divide(num, 100);
  const valM = divide(num, 1000);
  const AltV = valI === 4 ? 'IV' : '';
  const AltX = valI === 9 ? 'IX' : '';
  const AltL = valX % 10 === 4 ? 'XL' : '';
  const AltC = valX % 10 === 9 ? 'XC' : '';
  const AltD = valC % 10 === 4 ? 'CD' : '';
  const AltM = valC % 10 === 9 ? 'CM' : '';

  const M = append(valM, 'M');

  const D = AltM ? '' : divide(num, 500) % 2 === 1 ? 'D' : '';

  const C = append(valC, 'C');

  const L = AltC ? '' : divide(num, 50) % 2 === 1 ? 'L' : '';

  const X = append(valX, 'X');

  const V = AltX ? '' : divide(num, 5) % 2 === 1 ? 'V' : ''

  const I = AltX ? '' : append(valI, 'I');

  return `${M}${AltM}${AltD}${D}${C}${AltC}${AltL}${L}${X}${AltX}${V}${I}${AltV}`;
};
 
const result = intToRoman(process.argv[2]);

