/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/




/*

//Desafios
//Criar uma função que exibe "Olá, mundo!" no console.

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo





function exibirOlaMundo(){
    console.log("Olá mundo");
}

exibirOlaMundo();


function olaNome(nome){
    console.log(`Olá, ${nome}!`);
}
olaNome("Neymar");


function dobro(n){
    return n *2;
}

dobro(65);




function media(n, n2, n3){
    return ((n + n2 + n3)/ 3);
}

media(100, 100, 100);

function maiorDeles(n1, n2){

    return n1 > n2  ? n1 : n2;
    
}

maiorNumero = maiorDeles(50, 55);

function eleMesmoMultiplicando(n){
    return n * n;
}

eleMesmoMultiplicando(25);

*/


/* Desafios
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura,
em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais.
Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura 
que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido 
como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. */


/* function calculoImc(peso, altura){
     imc = peso / (altura * altura);
     return imc;
}

calculoImc(80, 1.72);




function fatorial(n){
    
    if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
    
}


fatorial();




function converteDolar(real){
    dolar = real / 4.80;

    return dolar;
}



function calcularArea(base, altura){
    sala = base * altura;
    return sala;
}



function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }





function tabuadaNumero(n){
    let contador = 0;
    while(contador <= 10){
            let tab = contador * n;
            return alert(` ${contador}x${n} = ${tab}`);
            
            
            contador ++;

    }
}


function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

  */

  let listaDeNumerosSorteados = []; // variavél para listar números que foram sorteados.
  let numeroLimite = 10;  // variavel que trás o número limite dos números sorteados.
  let numeroSecreto = gerarNumeroAleatorio(); // variavel que armazena o número secreto.
  let tentativas = 1; // números de tentativas.
  let numeroInicial = 1;
  let numeroAbaixo = -1;
  const botao = document.getElementById('reiniciar');

  
  function exibirTextoNaTela(tag, texto) {
      let campo = document.querySelector(tag);
      campo.innerHTML = texto;
      //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
  }
  
  function exibirMensagemInicial() {
      exibirTextoNaTela('h1', 'Jogo do número secreto');
      exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
  }
  
  exibirMensagemInicial();
  
  function verificarChute() {
      let chute = document.querySelector('input').value;
      
      

        if(chute > numeroLimite ){
            exibirTextoNaTela('span', `Digite entre 1 e ${numeroLimite}, o valor foi acima de ${numeroLimite}.`);
            
        }else if( chute === "" ){
            exibirTextoNaTela('span', `Digite entre ${numeroInicial} e ${numeroLimite}, nenhum valor digitado.`)
           
        }else if( chute <= numeroAbaixo || chute == 0){
            exibirTextoNaTela('span', `Digite entre 1 e ${numeroLimite}, o valor foi abaixo de ${numeroInicial}.`);
            
        }else{
            if (chute == numeroSecreto) {
        
                exibirTextoNaTela('h1', 'Acertou!');
                  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                  let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
                  exibirTextoNaTela('p', mensagemTentativas);
                  document.getElementById('reiniciar').removeAttribute('disabled');          
                  
              }else{
                
                if(chute > numeroSecreto) {
                      exibirTextoNaTela('p', 'O número secreto é menor');
                  }else{
                      exibirTextoNaTela('p', 'O número secreto é maior');
                  }

        }
        

        
          tentativas++;
          limparCampo();
          limparSpan();
          
      }
  }
  
  function gerarNumeroAleatorio() {
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
      let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  
      if (quantidadeDeElementosNaLista == numeroLimite) {
          listaDeNumerosSorteados = [];
      }
      if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
          return gerarNumeroAleatorio();
      } else {
          listaDeNumerosSorteados.push(numeroEscolhido);
          console.log(listaDeNumerosSorteados)
          return numeroEscolhido;
      }
  }
  
  function limparCampo() {
      chute = document.querySelector('input');
      chute.value = '';
  }
 
  function reiniciarJogo() {
      numeroSecreto = gerarNumeroAleatorio();
      botao.style.backgroundColor = "green";
      botao.textContent = "Reiniciar jogo";
      botao.addEventListener('click', alterarBotao);
      limparCampo();
      tentativas = 1;
      exibirMensagemInicial();
      document.getElementById('reiniciar').setAttribute('disabled', true)
     
    
  }




function limparSpan(){
    alerta = document.querySelector('span');
    alerta.textContent = "";
}

  function alterarBotao(){
    
  }