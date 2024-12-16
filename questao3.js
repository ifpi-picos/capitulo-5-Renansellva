const entrada1 = Number(prompt("digete o primeiro numero"))
const entrada2 = Number (prompt("digete o segundo numero"))
const entrada3 = Number (prompt("digete o terceiro numero"))

const media = (entrada1 + entrada2 + entrada3) / 3
    if (media >= 7) {
        console.log("aprovado")

    }else if (media >=4) {
        console.log("recuperação")
    }else {
        console.log ("reprovado")
    }