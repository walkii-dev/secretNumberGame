let secretNumber = Math.floor(Math.random() * 10);
console.log (secretNumber);

function startGame() {
    let guessArea = document.getElementById('guess');
    guessArea.disabled = false; 

    let start = document.querySelector('p');
    start.innerHTML = 'Insira um número de 1 a 10 para começar.';

    let buttonGuess = document.getElementById('botao');
    buttonGuess.innerHTML = 'Chute';
}
function checkGuess(){
    let guess = document.getElementById('guess').value;
    console.log(guess);

    if (guess == secretNumber){
        alert('acertou carai');
    } else{
        alert('errou carai');
    }
    
}

// if text = disabled hover disabled too
//mais um comentário teste pra ver se o commit sobe
//mantain hover if textbox is clicked   