// Question 01
function dated(now) {
    document.write(now)
}
dated(new Date())


// Question 02
function greet(firstName, lastName) {
    alert(`Hello ${firstName + " " + lastName}`)
}

greet("Khalil", "Haider")


// Question 03
var num1 = parseInt(prompt("Enter Number 1"));
var num2 = parseInt(prompt("Enter Number 2"));

function add() {
    return num1 + num2
}
var adding = add()
document.write(adding)


// Question 04
var num1 = parseInt(prompt("enter number 1"))
var opt = prompt("enter opt");
var num2 = parseInt(prompt("enter number 1"))
function calc(num1, opt, num2) {
    if (opt === "+") {
        return num1 + num2
    }
    else if (opt === "-") {
        return num1 - num2
    }
    else if (opt === "*") {
        return num1 * num2
    }
    else if (opt === "/") {
        return num1 / num2
    }
    else {
        return "Enter Correct operator"
    }
}
var add = calc(num1, opt, num2)
document.write(`Number 1: ${num1} <br> Operator ${opt} <br> Numeber 2: ${num2} <br> Calculation : ${add} `)


// Question 05
function squareValues(num) {

    var square = num * num
    return square
}
var value = parseInt(prompt("enter square value"));
var functionValue = squareValues(value);
document.write(`Your Value: ${value} <br> Square Value : ${functionValue}`)


// Question 06
function factorial(num) {
    var f = 1;
    for (var i = num; i >= 1; i--) {
        f = f * i
    }
    return sum
}

var funcValue = factorial(10);
document.write("Factorial Value: " + " " + funcValue)


// Question 07
var startNum = parseInt(prompt("Enter Start Value"))
var endNum = parseInt(prompt("Enter End Value"))

function counting(startNum, endNum) {
    for (var i = startNum; i <= endNum; i++) {

        document.write(i + " <br>")

    }

}
counting(startNum, endNum)


// Question 08
var base = parseInt(prompt("Enter Base Value: "))
var per = parseInt(prompt("Enter perpendicular Value: "))
var hyopValue = hypo(base, per)

function hypo(val1, val2) {

    return Math.sqrt(Math.pow(val1, 2) + Math.pow(val2, 2));
}
document.write(hyopValue)


// Question 09
var w = parseInt(prompt("Enter WIDTH"))
var h = parseInt(prompt("Enter HEIGHT"))

function rectangle(width, heigth) {
    var A = width * heigth;
    return A
}
document.write(rectangle(w, h))


// Question 10 
function palin(str) {
    var re = /[\W]/g;
    var lowerstr = str.toLowerCase().replace(re, "");
    var reversestr = lowerstr.split("").reverse().join("");
    return reversestr === lowerstr

}

console.log(palin("madam"))


// Question 11 
var userPara = prompt("Enter kuch bhii:")

function func(para) {

    var word = para.split(" ")
    var arr = [];
    for (var i = 0; i < word.length; i++) {
        arr.push(word[i].charAt(0).toUpperCase() + word[i].slice(1))
    }
    return arr.join(" ")

}

document.write(func(userPara));


var word = "the quick brown fox";
var split = word.split(" ")
var arr = [];
for (var i = 0; i < split.length; i++) {
    arr.push(split[i][0].toUpperCase() + split[i].slice(1))
}
console.log(arr)


// Question  12 
function longestWord(letter) {

    var word = letter.split(" ");
    var arr = word[0];
    for (var i = 0; i < word.length; i++) {
        if (arr.length < word[i].length) {
            arr = word[i]
        }
    }
    return arr
}
document.write(longestWord("Web Development Tutorial "))


// Question 13 
var Userstring = prompt("Enter any String Word")
var userChar = prompt("Enter any Word Character")

function letterCount(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count++
        }
    }


    return count
}
var result = letterCount(Userstring, userChar)
document.write(`User Argument : ${Userstring}
                <br> User Letter : ${userChar} <br>
                word count: ${result}`)


// Question 14 
function calcCircumference(radius) {
    var circumference = 2 * (Math.PI * radius);
    return circumference
}
function calcArea(radius) {
    var area = Math.PI * (radius * radius)
    return area
}

var circumferenceResult = calcCircumference(20).toFixed(3);
var areaResult = calcArea(10).toFixed(3);

document.write(`"The circumference is NN". ${circumferenceResult} <br>`)
document.write(`"The area is NN". ${areaResult}`)

console.log(calcArea(20))
console.log(calcCircumference(20))