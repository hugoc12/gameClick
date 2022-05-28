var placar = document.getElementById('placar')
var container = document.getElementById('container')
var baloes = document.querySelectorAll('.balao')
var contPontuacao = 0


function jogo(){
    let novoBalao = document.createElement('div')
    novoBalao.setAttribute('class', 'balao');
    novoBalao.setAttribute('style', `left: ${Math.floor(Math.random() * 350)}px; top: ${Math.floor(Math.random() * 120)}px; background-color: #${Math.floor(Math.random()*9)}${Math.floor(Math.random()*9)}${Math.floor(Math.random()*9)}${Math.floor(Math.random()*9)}${Math.floor(Math.random()*9)}${Math.floor(Math.random()*9)};`)

    container.appendChild(novoBalao)
    var baloes = document.querySelectorAll('.balao')

    if (baloes.length > 1) {
        container.innerHTML = ""
    }

    baloes.forEach((elemento)=>{
        elemento.addEventListener('click', (e)=>{
            if (container.hasChildNodes()) {
                container.removeChild(elemento);
                contPontuacao++
                placar.innerHTML = contPontuacao
            }
        })
    })
}

setInterval(jogo, 600)