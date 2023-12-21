const soma = (valor) => {
  if(valor === 0 || valor === 1){
    return valor;
  }
  
  return valor + soma(valor - 1)
  
}

console.log(soma(0))