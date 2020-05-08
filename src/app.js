//require('bootstrap');
//require('../public/bootstrap.css');

export function redirect(url){
    window.location = url;
}

export function adm_check(time){
    if(JSON.parse(localStorage.getItem('dados_adm'))){
        var redirectURL = './agenda_home.html';
        setTimeout(function(){redirect(redirectURL)}, time);
    }else{
        var redirectURL = './inicio.html';
        setTimeout(function(){redirect(redirectURL)},time);
    }
}


