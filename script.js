let secretNumber = geratorSecretNumber() // define um número aleatório a ser criado 
let firstExecution = true;
console.log(secretNumber)
let attempts = 0


function changeButton(){ //função que muda a funcionabilidade do botão, só que tem um bug aqui..., nao tem mais
     firstExecution = false
    useSubtitle("p",'Insira um número de 1 a 10 para começar.');
     
    let campo =document.getElementById("botao")
    campo.innerText = "chute"    
    
    startGame()
       
}

function startGame  (){
 let AreaInput = document.getElementById ('guess')
 AreaInput.disabled = false
 
if (AreaInput.value == 0){
return;
}else {
    checkGuess()
}
}


function checkGuess(){

    let guess = document.getElementById('guess').value;
    if (attempts == 0 && guess == secretNumber){
        useSubtitle("h1","Parabens, acertou de primeira")
        resetButton()//para regerar um novo nuero secreto.
    }else if (guess == secretNumber){
        useSubtitle("h1","Parabéns, você acertou!");
        resetButton()//para regerar um novo nuero secreto.
        

    }else if (attempts ==3){
        limitAttempts()
        resetButton()//para regerar um novo nuero secreto.
    }else {
        useSubtitle("h1","Eita, você errou!,tente novamente");//alterei o texto adicionando o tente novamente
        document.getElementById('guess').value = ""// com isso toda vez que errar, o numero vai sair.
        attempts++// toda vez que errar uma tentativa é adicionada, assim quando chegar a 3, para o jogo, que é oque ocorre no else if acima.
        console.log("o numero de tentativas é=",attempts)
    }
}
function geratorSecretNumber (){
   let campo= Math.floor(Math.random() * 10) + 1
    return campo
}


function useSubtitle(tag,text){// para fazer mudanças nos textos basta por a tag e o texto ex: useSubtitle("h1","parabens voce acertou o numero")
    let campo = document.querySelector(tag)
    campo.innerHTML = text
 
}

function limitAttempts (){
useSubtitle("h1","Jogo do Número Secreto")
        useSubtitle("p","o numero de tentativas foram atingidas")// 3 tentativas
       guess.disabled = true
        return guess.value = ""

}
function resetButton (){
    document.querySelector("input").value = ""
    let nameButton =document.getElementById("botao")
    nameButton.innerHTML="reiniciar"
    attempts = 0
   secretNumber = geratorSecretNumber()
    console.log(secretNumber)
    
}

// if text = disabled hover disabled too
//mantain hover if textbox is clicked   