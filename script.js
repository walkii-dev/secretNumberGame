let secretNumber = geratorNumberSecret() // define um número aleatório a ser criado 
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
   
    }else if (guess == secretNumber){
        useSubtitle("h1","Parabéns, você acertou!");

    }else if (attempts ==3){
        useSubtitle("h1","Jogo do Número Secreto")
        useSubtitle("p","o numero de tentativas foram atingidas")// 3 tentativas
       guess.disabled = true
        return guess.value = ""

    }else {
        useSubtitle("h1","Eita, você errou!,tente novamente");//alterei o texto adicionando o tente novamente
        document.getElementById('guess').value = ""// com isso toda vez que errar, o numero vai sair.
        attempts++// toda vez que errar uma tentativa é adicionada, assim quando chegar a 3, para o jogo, que é oque ocorre no else if acima.
        console.log("o numero de tentativas é=",attempts)
    }
}



function useSubtitle(tag,text){// para fazer mudanças nos textos basta por a tag e o texto ex: useSubtitle("h1","parabens voce acertou o numero")
    let campo = document.querySelector(tag)
    campo.innerHTML = text
   
}
function geratorNumberSecret(){

    let campo = Math.floor(Math.random() * 10) + 1
    return campo;
}



// if text = disabled hover disabled too
//mantain hover if textbox is clicked   