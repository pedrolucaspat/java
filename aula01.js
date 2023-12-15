let dado;
do {
  dado = prompt("Digite um número de 1 a 8");
} while (dado < 1 || dado > 8);
for(let i = 1; i < dado; i++){
  console.log(i*"#")
}