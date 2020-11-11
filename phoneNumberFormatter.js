function PhoneNumberFormatter(numbers) {
    //in: array of digits
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  let areaCode = this.parenthesize(this.getAreaCode());
  let exchangeCode = this.getExchangeCode();
  let lineNumber = this.getLineNumber();
  string = areaCode + exchangeCode + lineNumber;
  return string
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  let areaCode = ""
  for (let i=0; i<3; i++) {
      areaCode += this.numbers[i]; 
  }
  return areaCode
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  let exchangeCode = " "
  for (let i=3; i<6; i++) {
      exchangeCode += this.numbers[i]; 
  }
  exchangeCode += "-";
  return exchangeCode;
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  let lineNumber = ""
  for (let i=6; i<10; i++) {
      lineNumber += this.numbers[i]; 
  }
  return lineNumber
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED
function assertPhoneNumbersEqual (actual, expected, testName) {
  if (actual === expected) {
    console.log("passed")
  } else {
    console.log("FAILED " + '"' + testName + '"')
  }
}

// TESTS CASES
let numberArr = [5, 3, 0, 3, 3, 9, 2, 0, 9, 4]

let myNumber = new PhoneNumberFormatter(numberArr)

assertPhoneNumbersEqual(myNumber.render(), "(530) 339-2094", 'test "PhoneNumberFormatter.render" method')