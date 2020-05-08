import {adm} from './adm'
import {redirect} from './app'

var btn_add = document.getElementById('btn_add_adm');


btn_add.addEventListener('click', function(){
    var nome  = document.getElementById('name_adm').value;
    var login  = document.getElementById('login_adm').value;
    var pass  = document.getElementById('pass_adm').value;

    var myAdm = new adm(nome,login,pass);
    myAdm.setAdm();
    setTimeout(function(){redirect('./agenda_home.html')},1000);
}
);
