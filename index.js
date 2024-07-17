let vitorias = 200; 
let derrotas = 20; 
calcularRank(vitorias, derrotas);

function calcularRank(vitorias, derrotas) {
   
    const saldoVitorias = vitorias - derrotas;

    let nivel;

    if (vitorias < 10) {
        console.log("Ferro");
    } else if (vitorias >= 11 && vitorias <= 20) {
        console.log("Bronze");
    } else if (vitorias >= 21 && vitorias <= 50) {
        console.log("Prata");
    } else if (vitorias >= 51 && vitorias <= 80) {
        console.log("Ouro");
    } else if (vitorias >= 81 && vitorias <= 90) {
        console.log("Diamante");
    } else if (vitorias >= 91 && vitorias <= 100) {
        console.log("Lendário");
    } else {
        nivel = "Imortal";
    }

    console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel);
}
