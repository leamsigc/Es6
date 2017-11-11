

let ab = new Map();
let key_1 = 'string key';
let key_2 = {a:'key'}; //object key for map
let key_3 = function(){};
ab.set(key_3, 'Return value for a function');
ab.set(key_2, 'Return value for a object');
ab.set(key_1,'return value for a string key');

const numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
const valMap = new Map(numArr);

const someString = 'asdashdkjashdkaaaaaaaaajhdkjuqwpoiweqponmc';
let stringLettters = new Map();
for (let  i = 0; i <someString.length; i++) {
  let letter = someString[i];
  if (!stringLettters.has(letter)) {
    stringLettters.set(letter, 1);
  } else {
    stringLettters.set(letter,stringLettters.get(letter)+1)
  }
};
export {ab, valMap, stringLettters};
export default stringLettters;
