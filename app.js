// Question 1

var number=prompt("Enter a positive floating-point number")

var roundoffvalue=Math.round(number)
var floorvalue =Math.floor(number)
var ceilvalue=Math.ceil(number)

document.write("number:"+number+"<br>")
document.write("round off value:"+roundoffvalue+"<br>")
document.write("floor value:"+floorvalue+"<br>")
document.write("ceil value:"+ceilvalue+"<br>")


// Question 2

var negative=prompt("Enter a negative floating-point number ")

var roundoffvalue=Math.round(negative)
var floorvalue=Math.floor(negative)
var ceilvalue=Math.ceil(negative)

document.write("number:"+negative+"<br>")
document.write("round off value:"+roundoffvalue+"<br>")
document.write("floor value:"+floorvalue+"<br>")
document.write("ceil value:"+ceilvalue+"<br>")


//Question 3


var number=prompt("Enter a number its absolute value")

var absolutevalue=Math.abs(number)

document.write("The absolute value of " +number +"is"+absolutevalue)


// Question 4


var dicevalue=(Math.floor(Math.random()*6)+1)
console.log("random dice value"+dicevalue);
document.write("random dice value"+dicevalue+"<br>")


//Question 5

// var coinvalue=MAth.floor(math.random()*2)

// var result

// Question 6

var random=Math.floor(Math.random()*100)
document.write("Random number and 100:"+random)

// Question 8

var secret=(Math.floor(Math.random()*10)+1)
var userguess =prompt("Enter a number between 1 to 10")

if(userguess===secret){
    document.write("Congratulations!")
}else{
    document.write("Sorry"+secret+"Try Again!")
}