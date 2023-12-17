/// Desafio Classificador de nível de Herói
let herois = {
  heroi1: { nome: "Herói1", xp: 800 },
  heroi2: { nome: "Herói2", xp: 1500 },
  heroi3: { nome: "Herói3", xp: 3000 },
  heroi4: { nome: "Herói4", xp: 30000 },
  heroi5: { nome: "Herói5", xp: 312000 },
  heroi6: { nome: "Herói6", xp: 20 },
  heroi7: { nome: "Herói7", xp: 500 },
  heroi8: { nome: "Herói8", xp: 99000 },
  heroi9: { nome: "Herói9", xp: 1523 },
  heroi10: { nome: "Herói10", xp: 147895 },
};

for (let chave in herois) {
  let heroi = herois[chave];
  let nivel;

  if (xpHeroi < 1000) {
    nivel = "Ferro";
  } else if (xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi <= 7000) {
    nivel = "Ouro";
  } else if (xpHeroi <= 8000) {
    nivel = "Platina";
  } else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
  } else if (xpHeroi <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${heroi.nome} atingiu o nível ${nivel} com ${heroi.xp} de XP.`);
}