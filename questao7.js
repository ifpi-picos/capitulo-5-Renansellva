const valor1 = Number(prompt("digite o primeiro valor"))
const valor2 = Number(prompt("digite o segundo valor"))
const valor3 = Number(prompt("digite o terceiro valor"))

if (valor1 + valor2 > valor3 && valor1 + valor3 > valor2 && valor2 + valor3 > valor1){
    if (valor1 === valor2 && valor2 === valor3){
        console.log("Triângulo equilátero");
    }else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        console.log("Triângulo isósceles");
    }else {
        console.log("Triângulo escaleno");

    } } else {
        console.log("Os valores inseridos não formam um triângulo");
    }
    
    
    

