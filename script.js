let nomeHeroi = "Peekachoo"
let quantExpXP = 10500
let nivel = ""

switch (true) {
    case quantExpXP < 1000:
        nivel = "Ferro";
        break;
    case quantExpXP >= 1000 && quantExpXP <= 2000:
        nivel = "Bronze";
        break;
    case quantExpXP > 2000 && quantExpXP <= 5000:
        nivel = "Prata";
        break;
    case quantExpXP > 5000 && quantExpXP <= 7000:
        nivel = "Ouro";
        break;
    case quantExpXP > 7000 && quantExpXP <= 8000:
        nivel = "Platina";
        break;
    case quantExpXP > 8000 && quantExpXP <= 9000:
        nivel = "Ascendente";
        break;
    case quantExpXP > 9000 && quantExpXP <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);
