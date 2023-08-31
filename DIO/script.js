alert("Tudo certo, jovens?")

var tOuF = false;
console.log(typeof(tOuF));

var numero = 1;
console.log(number);

var nome = "samara";
console.log(nome);
nome = "parcero";
console.log(nome);

let variavel = 2;
console.log(variavel);

const constante = "muda? não"
console.log(constante);

var escopoglobal = "global";
console.log(escopoglobal)

function escopolocal(){
    let escopolocal = 'local';
    console.log(escopolocal);
}

var atribuicao = 'samara';

var comparacao = '0' == 0;

var comparacaoidentica = '0' === '0';

var adicao = 1+1;
console.log(adicao);

var subtracao = 1-1;
console.log(subtracao);

var multiplicacao = 2*3;

var divisaoReal = 6/2;

var divisaoInteira = 5%3;

var potenciacao = 2**10;

var maiorque = 5>2;
console.log(maiorque);

var menorque = 5<2;
console.log(menorque);

var maiorigual = 5>=2;
console.log(maiorigual);

var menorigual = 5<=2;
console.log(menorigual);

var e = true && false;

var ou = true || false;

var nao = !true;

let array = ['string', 1, true, ['array']]
console.log(array[0]);

array.forEach(function (item, index){console.log(item,index)});

array.push('novo item');
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift('novo item no inicio');
console.log(array);

console.log(array.indexOf[true]);

array.splice(0,3);
console.log(array);

let novoarray= array.splice(0,3);
console.log(novoarray);

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectinterno:['object interno'] };
console.log(object.number);

var string = (object.string);
console.log(string);

var arrayinterno = object.array;
console.log(arrayinterno);

var { string, boolean, objectinterno} = object;
console.log(string, boolean, objectinterno);


//------------------ESTRUTURAS CONDICIONAIS-------------------------------

var jogador1 =0;
var jogador2 = 0;
var placar;

jogador1 !== -1 && jogador2 !== -1? console.log("Os jogadores são válidos"): console.log("Jogadores inválidos");
console.log(jogador1 + jogador2);
if (jogador1> 0) {
    console.log("Jogador 1 marcou ponto");
} else if (jogador2> 0) {
    console.log("Jogador2 marcou ponto");
} else {
    console.log("Ninguém marcou ponto");
}


switch (placar){
    case placar= jogador1>jogador2: 
    console.log("Jogador 1 ganhou!");
    break;
    case placar = jogador1<jogador2: 
    console.log("Jogador 2 ganhou!");
    break;
    default:
        console.log("Ninguém ganhou");
}

let array1 = ['valor1', 'valor2', 'valor3' , 'valor4' , 'valor5' ];
let  object1= {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', propriedade4: 'valor4', propriedade5: 'valor5', } ;

for(let indice = 0; indice< array1.length; indice++){
    console.log(indice);
}

//com array
for(let i in array){
    console.log(i);
}

//com object
for (i in objetc){
    console.log(i);

}

//com array
for (i of array) {
    console.log(i);
}

for (i of object1.propriedade1){
    console.log(i);
}

var a = 0;

while (a<10){
    a++;
    console.log(a);

}

do {
    a++;
    console.log(a);
} while (a<10)

//------------------FUNÇÕES--------------------------------------------

function funcao(){
    console.log("Tudo certo, amigos?");
}
funcao();

function mensagem(primeiro, segundo){
    console.log(primeiro, parametro);
}

mensagem( "tudo certo," , "jovem");

//-------TIPOS DE FUNÇÃO--------------------------------------------------

//declarativas
function funcao1 (){
    console.log("sou uma função declarativa");
}

funcao1();

//com expressões
var funcao =function (){
    console.log("sou uma mensagem de função expressão");
}
funcao2();

//arrow function
var funcao = () =>{
    console.log("sou uma arrow function");
}

