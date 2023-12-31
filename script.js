
const btn = document.querySelector('#botao');
const btnBaixar = document.querySelector('#botaoBaixar');
function alterarImg(e){
    e.preventDefault();
    const nomeMinistrar = document.querySelector('#nome').value;
    const temaPalavra = document.querySelector('#tema').value;
    const data = document.querySelector('#data').value;
    const areSumir = document.querySelector('.camp-seletor');
    console.log(nomeMinistrar+' '+temaPalavra+' '+data);
    document.querySelector('#espaco-nome').innerHTML = 'com: '+nomeMinistrar;
    document.querySelector('#espaco-tema').innerHTML = temaPalavra;
    document.querySelector('#horario-culto').innerHTML = data;

    if(areSumir.style.display==='none'){
        areSumir.style.display='block';
    }else{
        areSumir.style.display='block'
    }

    
    if(btnBaixar.style.display==='none'){
        btnBaixar.style.display='block'
    }else{
        btnBaixar.style.display='block'
    }
}
btn.addEventListener('click',alterarImg);

function baixarImg(){
        html2canvas(document.getElementById('camp-seletor')).then(function(canvas) {
            canvas.toBlob(function(blob) {
                saveAs(blob,'ImgCulto.png');
            });
        });
    
}
btnBaixar.addEventListener('click',baixarImg);