export default function TestEuler(array, answer) {
  this.array = array;
  this.answer = answer;
}


TestEuler.prototype.returnNumbers = function (num) {
  const array = [];
  for (let i = 1; i < num; i ++) {
    if (!((i % 3) && (i % 5))) {
      array.push(i);
    } 
  }
  return array
}

TestEuler.prototype.sumNumbers = function (num) {
let newArray = this.returnNumbers(num);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
return this.answer = newArray.reduce(reducer);
};



