// tipos primitivos 

// boolean

var vOUf = false;
console.log(typeof(vOUf));

// number

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string

var nome = ("Gabriel");
console.log(typeof(nome));

// declarações

var variavel1;
console.log(variavel1);

let variavel2;
console.log(variavel2);

// ambos irão retornar undefine

variavel1 = "Melissa"
variavel2 = 'Gabriel'

variavel2 = "Qualquer outro nome";
console.log(variavel1)
console.log(variavel2)

const constante = ("Ana") // Precisa receber uma atribuição
console.log(constante)

var escopoGlobal = "Global"
console.log(escopoGlobal)

function escopoLocal() {
    let escopoLocalInterno = 'Local'
}

// isso abaixo irá retornar um erro
// console.log(escopoLocalInterno)