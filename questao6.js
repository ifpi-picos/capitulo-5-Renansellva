let num1 = Number (prompt("digite um numero!"))
let num2 = Number (prompt("digite o segundo numero!"))

    if (num2 === 0){
        console.log("divisao por zero nao e permitida")
        
    } else{const resto = num1 % num2 ===0 ;
        
     if (resto){
        console.log(num1,"e multiplo",num2) 
     }else{
        (num1,"nao e multiplo",num2)
     }
    }