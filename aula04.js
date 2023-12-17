quantidade = 6
function numerosimpares(valor){
  let conta = 0;
  let novavalor = valor;
  while(conta < quantidade){
    if(novavalor % 2 !== 0){
      console.log(novavalor);
      conta++;
    }
  
    novavalor++
  }
}
numerosimpares(8)