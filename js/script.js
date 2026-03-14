const container = document.getElementById("container");

for (let i = 1; i <= 17; i++) {
const button = document.createElement("button");
  button.id = "exercicio" + i;          
  button.textContent = "Exercício " + i; 
container.appendChild(button);
}


const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
botao.addEventListener("click", () => {
    botao.style.backgroundColor = "#d6d00f"; 
    botao.style.color = "black";             
});
});


//exercicio 1: faça um alroritmo que leia um número, mostre na tela e mostre o seu antecessor
document.getElementById("exercicio1").addEventListener("click", function() {
    alert('"Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor."');
let numero = Number(prompt("Digite um número:"));
alert("O antecessor de " + numero + " é: " + (numero - 1) + "!");
});


//exercicio 2: Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.
document.getElementById("exercicio2").addEventListener("click", function() {
    alert('"Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo."');
let base = Number(prompt("Digite a base do retângulo:"));
let altura = Number(prompt("Digite a altura do retângulo:"));
let area = base * altura;
alert("A área do retângulo é: " + area);
});

//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
document.getElementById("exercicio3").addEventListener("click", function() {
alert("Descubra sua idade em dias!!!");

let diaNasc = parseInt(prompt("Digite o dia do seu nascimento"));
let mesNasc = parseInt(prompt("Digite o mês do seu nascimento"));
let anoNasc = parseInt(prompt("Digite o ano do seu nascimento"));

let diaAtual = parseInt(prompt("Digite o dia atual"));
let mesAtual = parseInt(prompt("Digite o mês atual"));
let anoAtual = parseInt(prompt("Digite o ano atual"));

function idadeEmDias(diaNasc, mesNasc, anoNasc, diaAtual, mesAtual, anoAtual) {
    let diasNascimento = (anoNasc * 365) + (mesNasc * 30) + diaNasc;
        let diasAtual = (anoAtual * 365) + (mesAtual * 30) + diaAtual;

        return diasAtual - diasNascimento;
}

let resultadoidade = idadeEmDias(diaNasc, mesNasc, anoNasc, diaAtual, mesAtual, anoAtual);
alert("Sua idade em dias é: " + resultadoidade);
});

//Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
document.getElementById("exercicio4").addEventListener("click", function() {
    alert('"Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores."');
let totalEleitores = Number(prompt("Digite o número total de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

alert("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
alert("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
alert("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
});

//Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.
document.getElementById("exercicio5").addEventListener("click", function() {
    alert('"Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário."');
let salarioAtual = Number(prompt("Digite o salário mensal atual:"));
let percentualReajuste = Number(prompt("Digite o percentual de reajuste:"));

let novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100);
alert("O novo salário é: " + novoSalario.toFixed(2));
});

//O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

document.getElementById("exercicio6").addEventListener("click", function() {
    alert('"O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor."');
let somaCustoFabrica = Number(prompt("Digite o custo de fábrica do carro:"));
let percentualDistribuidor = 28;
let percentualImpostos = 45;

let custoFinal = somaCustoFabrica + (somaCustoFabrica * percentualDistribuidor / 100) + (somaCustoFabrica * percentualImpostos / 100);
alert("O custo final ao consumidor é: " + custoFinal.toFixed(2));
});

//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

document.getElementById("exercicio7").addEventListener("click", function() {
    alert('"Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor."');
let numeroCarrosVendidos = Number(prompt("Digite o número de carros vendidos:"));
let valorTotalVendas = Number(prompt("Digite o valor total das vendas:"));
let salarioFixo = Number(prompt("Digite o salário fixo:"));
let valorPorCarro = Number(prompt("Digite o valor que recebe por carro vendido:"));

let comissaoTotal = numeroCarrosVendidos * valorPorCarro;
let bonusVendas = valorTotalVendas * 0.05;
let salarioFinal = salarioFixo + comissaoTotal + bonusVendas;

alert("O salário final do vendedor é: " + salarioFinal.toFixed(2));
});


//Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo):

document.getElementById("exercicio8").addEventListener("click", function() {
alert('"Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius"');
alert("conversor de temperatura de Fahrenheit para Celsius!");
let tempfa = parseFloat(prompt("digite a temperatura em Fahrenheit"));
function conversoryipe() {
    let fahrenheit = tempfa;
    return (fahrenheit - 32) * 5/9;
}
let tempCelsius = conversoryipe(tempfa);
alert("a temperatura em Celsius é: " + tempCelsius.toFixed(2) + "°C"); 
});

//Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:
document.getElementById("exercicio9").addEventListener("click", function() {
    alert('"Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5."');
alert("seja bem vindo ao site de media de notas!!");
let nota1 = Number(prompt("digite a primeira nota"));
let nota2 = Number(prompt("digite a segunda nota"));
let nota3 = Number(prompt("digite a terceira nota"));
function media(a, b, c) {
    return ((a * 2) + (b * 3) + (c * 5)) / 10;
}
let resultadomedia = media(nota1, nota2, nota3);
alert("a media das notas é: " + resultadomedia.toFixed(2));
});

//Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!
document.getElementById("exercicio10").addEventListener("click", function() {
    alert('"Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!"');
let valorexer10 = Number(prompt("Digite um valor:"));
if (valorexer10 > 10) {
    alert("É MAIOR QUE 10!");
} else {
    alert("NÃO É MAIOR QUE 10!");
}
});

//Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
document.getElementById("exercicio11").addEventListener("click", function() {
alert('"Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo)."');
let valorexer11 = Number(prompt("Digite um valor:"));
if (valorexer11 >= 0) {
    alert("O valor é positivo!");
} else {
    alert("O valor é negativo!");
};
})

//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.
document.getElementById("exercicio12").addEventListener("click", function() {
    alert('"As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra."');
let numeroMacas = Number(prompt("Digite o número de maçãs compradas:"));
let custoTotal;
if (numeroMacas < 12) {
    custoTotal = numeroMacas * 1.30;
} else {
    custoTotal = numeroMacas * 1.00;
}
alert("O custo total da compra é: R$ " + custoTotal.toFixed(2));
});

//Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.
document.getElementById("exercicio13").addEventListener("click", function() {
    alert('"Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada."');
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let media = (nota1 + nota2) / 2;
if (media >= 6) {
    alert("O aluno foi aprovado!");
} else {
    alert("O aluno não foi aprovado.");
}
alert("A média do aluno é: " + media.toFixed(2));
});

//Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
document.getElementById("exercicio14").addEventListener("click", function() {
    alert('"Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu)."');
let anoAtual = Number(prompt("Digite o ano atual:"));
let anoNascimento = Number(prompt("Digite o ano de nascimento:"));
let idade = anoAtual - anoNascimento;
if (idade >= 16) {
    alert("Você poderá votar este ano!");
} else {
    alert("Você não poderá votar este ano.");
}});

//Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
document.getElementById("exercicio15").addEventListener("click", function() {
    alert('"Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles."');
let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));
if (valor1 > valor2) {
    alert("O maior valor é: " + valor1);
} else {
    alert("O maior valor é: " + valor2);
}});

//Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
document.getElementById("exercicio16").addEventListener("click", function() {
    alert('"Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente."');
let valor1 = Number(prompt("Digite o primeiro valor:"));
let valor2 = Number(prompt("Digite o segundo valor:"));
if (valor1 < valor2) {
    alert("Os valores em ordem crescente são: " + valor1 + ", " + valor2);
} else {
    alert("Os valores em ordem crescente são: " + valor2 + ", " + valor1);
}});

//Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
document.getElementById("exercicio17").addEventListener("click", function() {
    alert('"Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte."');
let horaInicio = Number(prompt("Digite a hora de início do jogo (0-23):"));
let horaFim = Number(prompt("Digite a hora de fim do jogo (0-23):"));
let duracao;
if  (horaFim === horaInicio) {
        duracao = 24; // mesmo horário → jogo durou 24 horas
    } else if (horaFim >= horaInicio) {
    duracao = horaFim - horaInicio;
} else {
    duracao = (24 - horaInicio) + horaFim;
}
alert("A duração do jogo é: " + duracao + " horas");
});