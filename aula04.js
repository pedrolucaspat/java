const quantidade = 6;

function valoresimpares(valor){
  let contador = 0;
  let novovalor = valor;

  while(contador < quantidade){
    if(novovalor % 2 !== 0){
      console.log(novovalor);
      contador++;
    }
    novovalor++;
  }
}

valoresimpares(8);