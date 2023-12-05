function saldoVitorias(vitoria, derrota) {
  let saldo = vitoria - derrota;
  return saldo;
}

function Posicao() {
  let rank = saldoVitorias(50, 10);
  let nivel;
  if (rank <= 10) {
    nivel = 'Ferro';
  } else if (rank <= 20) {
    nivel = 'Bronze';
  } else if (rank <= 50) {
    nivel = 'Prata';
  } else if (rank <= 80) {
    nivel = 'Ouro';
  } else if (rank <= 90) {
    nivel = 'Diamante';
  } else if (rank <= 100) {
    nivel = 'Lendário';
  } else if (rank >= 101) {
    nivel = 'Imortal';
  }
  return `O Herói tem de saldo de **${rank}** está no nível de ${nivel}`;
}

console.log(Posicao());
