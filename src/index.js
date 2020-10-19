const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '/': ' ',
};

function decode(expr) {
    const newArray = [];
    const result = [];
    for (let i = 0; i < expr.length; i += 10) {
          newArray.push(expr.slice(i, i + 10).replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, ''));
    }
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] in MORSE_TABLE) {
          result.push(MORSE_TABLE[newArray[i]]);
      } else result.push(' ');
    }
    return result.join('');
}


      



    


module.exports = {
    decode
}