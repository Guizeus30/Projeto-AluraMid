//Função Principal
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    //Metedo para definir elemento
    if (elemento != null && elemento.localName === 'audio') { 
        elemento.play();
    }

    //Caso o resultado de False
    else {
        console.log('Metodo Invalido');
    }
};

//Contante de busca das teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//Codigo usando While 
/*
//Atribuição da variavel contador
let contador = 0;

//Loop de repetição com While
while (contador < listaDeTeclas.length) {

    //contantes
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //função click
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    //contador
    contador = contador + 1;

    //Função de atiavção da tecla
    tecla.onkeydown = function (evento) {

        //metodo para definir tecla
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
    }

    //Funçao de desativação
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
};*/

//Codigo usando IF

//Loop de repetição com For
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    //contantes
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //função click
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    //Função de atiavção da tecla
    tecla.onkeydown = function (evento) {

        //metodo para definir tecla
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
    }

    //Funçao de desativação
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
};
