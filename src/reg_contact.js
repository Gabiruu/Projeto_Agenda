import {contact} from './contact'

var btn_add = document.getElementById('send_ctt');


btn_add.addEventListener('click', function(){
    var nome  = document.getElementById('name_contact').value;
    var tel  = document.getElementById('tel_contact').value;
    var email  = document.getElementById('email_contact').value;
    var cep  = document.getElementById('cep_contact').value;
    var log  = document.getElementById('log_contact').value;
    var bairro  = document.getElementById('bairro_contact').value;
    var cidade  = document.getElementById('cidade_contact').value;
    var estado  = document.getElementById('estado_contact').value;
    var nmr  = document.getElementById('nmr_contact').value;
   
    var myContact = new contact(nome,tel,email,cep,log,bairro,cidade,estado,nmr);
    myContact.setContact();
    location.reload();
}
);
