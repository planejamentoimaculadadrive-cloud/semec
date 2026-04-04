// config.js
var URL_SCRIPT = 'https://script.google.com/macros/s/AKfycbw2Ie7Pjctnep9it3q-CUj9Dv216uT7DDSCtfb387OX8soT15dbT-h5k09pbRVG7KGf/exec';

// Criamos este apelido para garantir compatibilidade com os novos arquivos
var CONFIG_URL = URL_SCRIPT;

function validarAcesso() {
    const nome = localStorage.getItem('user_nome');
    if (!nome) {
        window.location.href = 'index.html';
    }
}