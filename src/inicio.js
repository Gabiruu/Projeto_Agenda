import {adm_check} from './app'
//adm_check();

var box_inicio = document.getElementById('box-inicio'); 

//Ao clicar em box-inicio redirecionar para reg_adm.html
function setHref(){
    function renderBtn(){
        let box_descricao = document.getElementById('box-description');
        let txt_btn = document.createTextNode('Clique aqui para continuar');
        let btn_continuar = document.createElement('a');
        btn_continuar.setAttribute('href', './reg_adm.html');
        btn_continuar.setAttribute('class','btn btn-success');
        btn_continuar.appendChild(txt_btn);
        box_descricao.appendChild(btn_continuar);
    }
    setTimeout(renderBtn, 3000);
}

box_inicio.addEventListener('load', setHref());