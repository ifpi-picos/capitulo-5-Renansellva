let num1 = parseInt(prompt("digite"))
let num2 = parseInt(prompt("digite"))
let num3 = parseInt(prompt("digite"))
if (num1 > num2 && num1 > num3 ) {
    console.log("num1 e o maior")
} else {
    if (num2 > num1 && num2 > num3) {
        console.log("num2 e o maior")
    } else{
        console.log("num3 e o maior")
    }
}

