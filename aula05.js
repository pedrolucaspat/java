function numeros(numero1, numero2){
  let menor = 0;
  let maior = 0;
  let soma = 0;
  if(numero1 > numero2){
    menor = numero2;
    maior = numero1;
    
  }else{
    menor = numero1;
    maior = numero2;
  }
  for(menor; menor<maior; menor++){
    if(menor % 13 !== 0){
      soma += menor;
    }
  }
  return soma;
}
console.log(numeros(100, 201))

prompt("digite um numero")