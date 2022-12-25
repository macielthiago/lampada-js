var turnOn = document.getElementById('turnOn')
var turnoff = document.getElementById('turnOff')
var lamp = document.getElementById('lampada')

turnOn.addEventListener('click', ligar)
turnoff.addEventListener('click', desligar)
lamp.addEventListener('dblclick', quebrar)

function ligar() {
    if(!isLampBroken()) {
        lamp.src = 'imagens/ligada.jpg'
    }    
}

function desligar() {
    if(!isLampBroken()) {
        lamp.src = 'imagens/desligada.jpg'
    }    
}

function quebrar() {
    lamp.src = 'imagens/quebrada.jpg'
}

function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}