let horas = prompt("quantas horas a viagem durou?");
let velocidadem = prompt("qual foi a velocidade media");
const litroskm = 12;
function calculakm(){
  
  return Number((horas * velocidadem)/litroskm).toFixed(3)
}
console.log(calculakm())
