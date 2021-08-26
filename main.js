let altura = 0
let largura = 0
let vidas = 1
let tempo = 60
let criaTempoMosquito = 2000
let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaTempoMosquito = 2000

} else if (nivel === 'dificil') {
    criaTempoMosquito = 1500

} else if (nivel === 'JohnWick') {
    criaTempoMosquito = 750
}


// função para tamanho do jogo

function ajustaTamanhoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoJogo()

// criando cronometro

let cronometro = setInterval(function() {
    
    tempo -= 1

    if(tempo < 0) {

        clearInterval(cronometro)
        clearInterval(criarMosquito)

        // mudar para página de vitória

        window.location.href = 'vitoria.html'

        // fim página de vitória

    } else {

    document.getElementById('cronometro').innerHTML = tempo

    }
    
}, 1000)

// fim cronometro

// função para posição aleatória do mosquito
function posicaoAleatoria() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // controle de pontos de vida

        if(vidas > 3) {
            window.location.href = 'gameover.html'

        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        
            vidas++
        }

        
    }

    // fim controle pontos de vida

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    // operador ternários para evitar criar posições negativas para o mosquito

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // elementos HTMLS

    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

// função para tamanho do mosquito

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

// mudar "lado" do mosquito

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'lado1'

        case 1:
            return 'lado2'
    }
}

// como escolher o nível do jogo

function iniciarJogo() {
    let nivel = document.getElementById('nivel').value

    if(nivel === '') {
        alert('Selecione um nível para iniciar o jogo!')
        return false
    }

    window.location.href = "jogo.html?" + nivel
}

