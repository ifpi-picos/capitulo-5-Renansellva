
let numero = Number(prompt('Digite um número:'));
function calcularFatorial(num) {
    if (num < 0) {
        return 'Fatorial não é definido para números negativos.';
    }
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}
if (!isNaN(numero)) {
    alert('O fatorial de ' + numero + ' é ' + calcularFatorial(numero));
} else {
    alert('Por favor, insira um número válido.');
}