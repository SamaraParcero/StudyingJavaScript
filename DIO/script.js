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