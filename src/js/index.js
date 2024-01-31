const nomeCapitulo = document.getElementById('capitulo');
const audio = document.getElementById('audio-capitulo');
const botaoPlayPause = document.getElementById('play-pause');
const botaoProximoCapitulo = document.getElementById('proximo');
const botaoCapituloAnterior = document.getElementById('anterior');


const quantidadeCapitulos = 10;
let taTocando = false;
let capituloAtual =1; // numero do primeiro capitulo no html sem evento

function tocarFaixa( ){
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
    audio.play();
    taTocando = true;
    
}
function pausarFaixa( ){
    botaoPlayPause.classList.add('bi-play-circle')
    botaoPlayPause.classList.remove('bi-pause-circle')
    audio.pause();
    taTocando = false;
}
function tocarOuPausar( ){
     if( taTocando === true ){ 
        pausarFaixa();
         
     } else {
        tocarFaixa();
    
     }
 }

    function capituloAnterior(){
        if(capituloAtual >= 1 ){
            capituloAtual = quantidadeCapitulos;
        }else{
    capituloAtual -= 1;
    }
    audio.src ='src/books/dom-casmurro'+ capituloAtual + '.mp3';
    nomeCapitulo.innerText="Capítulo "+capituloAtual;
    tocarFaixa();
    taTocando = true;
}
    function proximoCapitulo(){
        if(capituloAtual < quantidadeCapitulos){
            capituloAtual +=1;
        }else{
            capituloAtual = 1;
        }

        
        audio.src = "src/books/dom-casmurro/" + capituloAtual + ".mp3";
        nomeCapitulo.innerText = "Capítulo " + capituloAtual;
        tocarFaixa();
        taTocando = true;
        
 }
    
 
botaoPlayPause.addEventListener('click',tocarOuPausar)
botaoCapituloAnterior.addEventListener('click',capituloAnterior);
botaoProximoCapitulo.addEventListener('click',proximoCapitulo);
audio.addEventListener('ended',proximoCapitulo);


  /* function trocarNomeFaixa(){
            nomeCapitulo.innerText}

        function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1
    }else {
    capituloAtual = capituloAtual + 1
    }
    audio.src ='src/books/dom-casmurro'+ 
    tocarFaixa()
    capituloAtual + '.mp3'
    taTocando = 1
}
*/