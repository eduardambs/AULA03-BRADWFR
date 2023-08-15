// Estrutura de repetições
//while
//do while
//for 
//for in
//for of

//WHILE
// let n = 0;
// let x = 0;
// while (n < 3) {
//     n++;
//     x += n;
//     console.log("n: ", n);
//     console.log("x: ", x);
// }

//DO WHILE
// let i = 0;
// do {
//     i +=1; // i++
//     console.log("i: ", i);
// } while (i < 5);

//FOR
// for (let x = 0; x <= 10; x++) {
//     console.log("x: ", x);

// }

//FOR IN
// in mostra os valores e os índices
// let a = [1, 2, 3, 4]
// for (i in a) { // mostrando o índice e o valor do vetor 
//     console.log("indice: ", i, "valor: ", a[i]);
// } 

// of mostra os valores e não mostra o índice
// let a = [1, 2, 3, 4]
// for (let k of a){
//     console.log("valor: ", k);
// }

// MOSTRANDO OS NOMES E SEU INDICE NA TELA COM FUNÇÃO
// let texto = "";
// const nomes = ["Ichigo", "Rukia", "Renji", "Ishida", "Zoro"];
// nomes.forEach(minhaFuncao); // para cada elemento do array ele vai chamar a função 

// document.getElementById("txt").innerHTML = texto;
// // criando uma função 
// function minhaFuncao(item, indice, teste){
//     texto += indice + ": " + item + teste + "<br>";

// }

/**** FORMAS DE SE UTILIZAR FUNÇÕES ****/

// function nomeFuncao() {
//     //codigo
//     return valor;
// }
// nomeFuncao(); // executando a função anteriormente 

// ARMAZENANDO UMA FUNÇÃO NA VARIÁVEL
// const funcao1 = 5 + 6; 
// let opcao = "lab401";
// const funcao2 = function escolher() {
//      return opcao = "lab402";
//  }

// console.log(funcao()); 

// USANDO UM ARRAY
// let a = [funcao2(), funcao1, function soma(x, y){ return x + y;}];
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2](10, 5));
// console.log(a[3]);

// OBJETO 
// let endereco = {}; // criando um objeto vazio para 
// endereco.rua = "Avenida das flores";
// endereco.numero = 2010;
// endereco.cidade = "Bragança-Paulista";
// endereco.estado = estado(1); // passando o valor por parâmetro

// function estado(x) {
//     if (x == 1){
//         return "SP";
//     } else {
//         return "RJ";
//     }
// }

// console.log(endereco);

// OUTRA FORMA DE UTILIZAR FUNÇÃO
// function soma(a, b) {
//     return function(c) {
//         console.log(a + b + c);
//     }
// };
// soma(10, 4)(2);

// ARROW FUNCTIONS 
// function meuNome(nome, sobrenome) {
//     console.log(nome + sobrenome);
// }
// meuNome("Maria ", "Eduarda");

// meuNome = (nome) => {
//     console.log(nome);
//     meuNome("Maria ", "Eduarda");
// }

// *** CONST MULT ***
// // const mult = (numero) => {
// //     return 2*numero;
// // }

// num = Number(prompt("Informe um número: "));

// const mult = numero => 2*numero
// console.log(mult(num));

// FUNÇÕES IMEDIATAS
// (function(){});

// let texto = document.getElementById("txt");
// let button = document.querySelector("button"); // outra forma de selecionar os elementos
// let c = 0;
// button.addEventListener("click", () => {
//     c = c + 1;
//     texto.textContent = c + " cliques.";
//     console.log("botão selecionado1") 
// });


