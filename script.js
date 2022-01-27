let itens = ["Panela","Prato","Garfo","Colher","Tampa"];

for(let i = 0;i <= 4;i++){
  console.log(itens[i]);
}

itens.unshift("Talher");

console.log(itens);

itens.pop();

console.log(itens);

itens.splice(5, 0, "Cozinha", "Sala");

console.log(itens);

itens.shift();

console.log(itens);

const number = [7,5,6,3,8,9,2,1,4];

number.sort();

console.log(number);
