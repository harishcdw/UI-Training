let calculator = {
// -------------addition-----------------------
    addition: function (number1, number2) {
        if (this.isvalid(number1,number2))
            return number1 + number2;
        else
            return "format incorrect"
    },

// -------------subtraction-----------------------
    subtraction: function (number1, number2) {
        if (this.isvalid(number1,number2))
            return number1 - number2;
        else
            return "format incorrect"
    },

//  -------------Multiplication------------
    multiplication: function (number1, number2) {
        if (this.isvalid(number1,number2))
            return number1 * number2;
        else
            return "format incorrect"
    },

// ----------------Division-------------------
    division: function (number1, number2) {
        if (this.isvalid(number1,number2)) {
            if (number2 != 0) {
                return number1 / number2;
            }
            else {
                return "division by zero error"
            }
        }

        else
            return "format incorrect"
    },

// -----------------Modulus---------------------
    modulus: function (number1, number2) {
        if (this.isvalid(number1,number2))
            return number1 % number2;
        else
            return "format incorrect"
    },



    // --------------isvalid------------------------
    isvalid: function (number1, number2) {
        if (typeof (number1) == "number" && typeof (number2) == "number")
            return true;
        else
            return false;
    }
}



let number1 = 6;
let number2 = 4;


// comments
console.log(calculator.addition(number1, number2))
console.log(calculator.subtraction(number1,number2))
console.log(calculator.multiplication(number1,number2))
console.log(calculator.division(number1,number2))
console.log(calculator.modulus(number1,number2))