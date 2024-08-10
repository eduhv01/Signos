let imagem = window.document.getElementById('img');
let nome_signo = window.document.getElementById('nsigno');
let dataAtual = new Date();
let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth() + 1;

if ((diaAtual >= 21 && mesAtual === 3) || (diaAtual <= 20 && mesAtual === 4)) {
    imagem.src = 'assets/img/ico-aries.png';
    nome_signo.innerHTML = 'Áries';
    document.body.style.background = '#CE0000'
} else if ((diaAtual >= 21 && mesAtual === 4) || (diaAtual <= 20 && mesAtual === 5)) {
    imagem.src = 'assets/img/ico-touro.png';
    nome_signo.innerHTML = 'Touro';
    document.body.style.background = '#9A6700'
} else if ((diaAtual >= 21 && mesAtual === 5) || (diaAtual <= 20 && mesAtual === 6)) {
    imagem.src = 'assets/img/ico-gemeos-1.png';
    nome_signo.innerHTML = 'Gêmeos';
    document.body.style.background = '#006667'
} else if ((diaAtual >= 21 && mesAtual === 6) || (diaAtual <= 21 && mesAtual === 7)) {
    imagem.src = 'assets/img/ico-cancer.png';
    nome_signo.innerHTML = 'Câncer';
    document.body.style.background = '#007DA4'
} else if ((diaAtual >= 22 && mesAtual === 7) || (diaAtual <= 22 && mesAtual === 8)) {
    imagem.src = 'assets/img/ico-leao.png';
    nome_signo.innerHTML = 'Leão';
    document.body.style.background = '#CE0000'
} else if ((diaAtual >= 23 && mesAtual === 8) || (diaAtual <= 22 && mesAtual === 9)) {
    imagem.src = 'assets/img/ico-virgem.png';
    nome_signo.innerHTML = 'Virgem';
    document.body.style.background = '#9A6700'
} else if ((diaAtual >= 23 && mesAtual === 9) || (diaAtual <= 22 && mesAtual === 10)) {
    imagem.src = 'assets/img/libra.png';
    nome_signo.innerHTML = 'Libra';
    document.body.style.background = '#006667'
} else if ((diaAtual >= 23 && mesAtual === 10) || (diaAtual <= 21 && mesAtual === 11)) {
    imagem.src = 'assets/img/escorpiao.png';
    nome_signo.innerHTML = 'Escorpião';
    document.body.style.background = '#00659B'
} else if ((diaAtual >= 22 && mesAtual === 11) || (diaAtual <= 21 && mesAtual === 12)) {
    imagem.src = 'assets/img/sagitario.png';
    nome_signo.innerHTML = 'Sagitário';
    document.body.style.background = '#CE0000'
} else if ((diaAtual >= 22 && mesAtual === 12) || (diaAtual <= 20 && mesAtual === 1)) {
    imagem.src = 'assets/img/capricornio.png';
    nome_signo.innerHTML = 'Capricórnio';
    document.body.style.background = '#9A6700'
} else if ((diaAtual >= 21 && mesAtual === 1) || (diaAtual <= 19 && mesAtual === 2)) {
    imagem.src = 'assets/img/aquario.png';
    nome_signo.innerHTML = 'Aquário';
    document.body.style.background = '#006667'
} else if ((diaAtual >= 20 && mesAtual === 2) || (diaAtual <= 20 && mesAtual === 3)) {
    imagem.src = 'assets/img/peixes.png';
    nome_signo.innerHTML = 'Peixes';
    document.body.style.background = '#00659B'
}