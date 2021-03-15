const buttons = document.querySelectorAll(".checar");
const elementopontuacao = document.getElementById("pontuacao");
const main = document.getElementById('main');
const selecao = document.getElementById('selecao');
const limpar = document.getElementById('limpar');
const usuarioselecao = document.getElementById('usuarioselecao')
const computadorselecao = document.getElementById('computadorselecao')
const ganhar = document.getElementById('winner');
const regras = document.getElementById('regras');
const abrir = document.getElementById('abrir');
const fechar = document.getElementById('fechar');
const choices = ['paper','scissors','rock'];

let pontuacao = 0;
let usuario = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        usuario = button.getAttribute('data-choice');

        checar();
    });
});

limpar.addEventListener("click", () =>{
    main.style.display = "flex";
    selecao.style.display = "none";
});
abrir.addEventListener("click", () =>{
    regras.style.display = "flex";
});
fechar.addEventListener("click", () =>{
    regras.style.display = "none";
});
function checar(){
    const computador = randomchoice();

    atualizarselecao(usuarioselecao, usuario);
    atualizarselecao(computadorselecao, computador);

    if (usuario === computador){
        //empate
        ganhar.innerText = "Empatou"
    }else if((usuario === 'paper' && computador === 'rock') ||
    (usuario === 'rock' && computador === 'scissors') ||
    (usuario === 'scissors' && computador === 'paper')){
        //vitória usuario
        ganhar.innerText = "Ganhou"
        atualizarpontuacao(1);
    }else{
        //vitória computador
        ganhar.innerText = "Perdeu"
        atualizarpontuacao(-1);
    }

    main.style.display = "none";
    selecao.style.display = "flex";
}
function atualizarpontuacao(value){
    pontuacao += value;
    elementopontuacao.innerText = pontuacao;
}
function randomchoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function atualizarselecao(elementoselecionado, choice){
    console.log(elementoselecionado, choice);
    elementoselecionado.classList.remove('paper');
    elementoselecionado.classList.remove('rock');
    elementoselecionado.classList.remove('scissors');

    
    const img = elementoselecionado.querySelector('img');
    elementoselecionado.classList.add(choice);
    img.src =  `/images/icon-${choice}.svg`;
    img.alt = choice;
}