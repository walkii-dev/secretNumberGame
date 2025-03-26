let secretNumber = Math.floor(Math.random() * 10); // define um número aleatório a ser criado 
let firstExecution = true;


function changeButton(){ //função que muda a funcionabilidade do botão, só que tem um bug aqui...
document.getElementById('botao').addEventListener('click',function() {
    if (firstExecution){
        startGame();
        firstExecution = false;
    } else {
        checkGuess();
    }
});
}

function startGame() {
    let guessArea = document.getElementById('guess'); 
    guessArea.disabled = false; 

    useSubtitle('Insira um número de 1 a 10 para começar.');

    let buttonGuess = document.getElementById('botao');
    buttonGuess.innerHTML = 'Chute';
}

function checkGuess(){

    let guess = document.getElementById('guess').value;

    document.getElementById('guess').value = 0; //isso aqui está errado, vou corrigir, deveria só fazer o valor sumir kk

    if (guess == secretNumber){
        useSubtitle("Parabéns, você acertou!");

    } else{
        useSubtitle("Eita, você errou!");
    }  
}

function useSubtitle(text){ //função que faz a alteração de texto, futuramente devo aplicar um strong e uma estilização...
    let tag = document.querySelector('p');
    tag.innerHTML = text;
}




// if text = disabled hover disabled too
//mantain hover if textbox is clicked   