import {adm} from './adm'
import {contact} from './contact'
require('bootstrap');


function showName(){
    var myAdm = new adm();
    myAdm = myAdm.getAdm();

    let text = document.createTextNode('Olá ' + myAdm.nome);
    let tlt = document.getElementById('adm_hello');
    tlt.appendChild(text);
}
/*
var myContactss = new contact();
var myContacts = [];

function showContacts(){
    let ctt_list = document.querySelector('ul');
    ctt_list.innerHTML ='';
    myContacts = myContactss.getListContact();

    console.log(myContacts);
   

    myContacts.forEach(e => {
        let pos = myContacts.findIndex(i => i.nome === e.nome); 

        let teste = document.createElement('button');

        teste.innerHTML = e.nome;
        teste.className = 'btn btn-primary';
        teste.setAttribute('type','button');
        teste.setAttribute('data-toggle','collapse');
        teste.setAttribute('data-target','#li_'+pos );
        teste.setAttribute('aria-expanded','false');
        teste.setAttribute('aria-controls','li_'+pos );

        ctt_list.appendChild(teste);

        let ctt_li = document.createElement('li');
        let ctt_p_nome = document.createElement('p');
        let ctt_p_telefone = document.createElement('p');
        let ctt_p_email = document.createElement('p');
        let ctt_p_cep = document.createElement('p');
        let ctt_p_rua = document.createElement('p');
        let ctt_p_bairro = document.createElement('p');
        let ctt_p_cidade = document.createElement('p');
        let ctt_p_estado = document.createElement('p');
        let ctt_p_numero = document.createElement('p');

        ctt_list.appendChild(ctt_li);
        ctt_li.id = 'li_'+pos;
        ctt_li.appendChild(ctt_p_nome);
        ctt_li.appendChild(ctt_p_telefone);
        ctt_li.appendChild(ctt_p_email);
        ctt_li.appendChild(ctt_p_cep);
        ctt_li.appendChild(ctt_p_rua);
        ctt_li.appendChild(ctt_p_bairro);
        ctt_li.appendChild(ctt_p_cidade);
        ctt_li.appendChild(ctt_p_estado);
        ctt_li.appendChild(ctt_p_numero);
        ctt_li.className = 'list-group-item mt-2 mb-2 collapse';

        
        ctt_p_nome.appendChild(document.createTextNode('Nome: '+e.nome));
        ctt_p_telefone.appendChild(document.createTextNode('Telefone: '+e.telefone));
        ctt_p_email.appendChild(document.createTextNode('Email: '+e.email));
        ctt_p_cep.appendChild(document.createTextNode('CEP: '+e.endereco.cep));
        ctt_p_rua.appendChild(document.createTextNode('Logradouro: '+e.endereco.logradouro));
        ctt_p_bairro.appendChild(document.createTextNode('Bairro: '+e.endereco.bairro));
        ctt_p_cidade.appendChild(document.createTextNode('Cidade: '+e.endereco.cidade));
        ctt_p_estado.appendChild(document.createTextNode('Estado: '+e.endereco.estado));
        ctt_p_numero.appendChild(document.createTextNode('Numero: '+e.endereco.numero));
        
        console.log('index:  ' +   pos );

        let btn_del = document.createElement('button');
        btn_del.appendChild(document.createTextNode('APAGAR CONTATO'));
        btn_del.setAttribute('class', 'btn btn-danger');
        btn_del.addEventListener('click', function(){
            del_ctt(pos);
        });
        ctt_li.appendChild(btn_del);

        let btn_alt = document.createElement('button');
        btn_alt.appendChild(document.createTextNode('ALTERAR CONTATO'));
        btn_alt.setAttribute('class', 'btn btn-warning');
        btn_alt.addEventListener('click', function(){
            alt_ctt(pos);
        });
        ctt_li.appendChild(btn_alt);
    });
}



function alt_ctt(pos){
    let contato = myContacts[pos];
    console.log(contato);
    let id_li_ctt = document.getElementById('li_'+pos);
    id_li_ctt.innerHTML = '';

    let form = document.createElement('div');
    form.className = 'form-group';
    id_li_ctt.appendChild(form);
    
    let ctt_input_nome = document.createElement('input');
    ctt_input_nome.className = 'form-control';
    ctt_input_nome.id = 'ctt_input_nome';
    ctt_input_nome.setAttribute('value', contato.nome);
    ctt_input_nome.setAttribute('placeholder', contato.nome);
    form.appendChild(ctt_input_nome);
    
    let ctt_input_telefone = document.createElement('input');
    ctt_input_telefone.className = 'form-control';
    ctt_input_telefone.id = 'ctt_input_telefone';
    ctt_input_telefone.setAttribute('value', contato.telefone);
    ctt_input_telefone.setAttribute('placeholder', contato.telefone);
    form.appendChild(ctt_input_telefone);
    
    let ctt_input_email = document.createElement('input');
    ctt_input_email.className = 'form-control';
    ctt_input_email.id = 'ctt_input_email';
    ctt_input_email.setAttribute('value', contato.email);
    ctt_input_email.setAttribute('placeholder', contato.email);
    form.appendChild(ctt_input_email);

    let ctt_input_cep = document.createElement('input');
    ctt_input_cep.className = 'form-control';
    ctt_input_cep.id = 'ctt_input_cep';
    ctt_input_cep.setAttribute('value', contato.endereco.cep);
    ctt_input_cep.setAttribute('placeholder', contato.endereco.cep);
    form.appendChild(ctt_input_cep);

    let ctt_input_logradouro = document.createElement('input');
    ctt_input_logradouro.className = 'form-control';
    ctt_input_logradouro.id = 'ctt_input_logradouro';
    ctt_input_logradouro.setAttribute('value', contato.endereco.logradouro);
    ctt_input_logradouro.setAttribute('placeholder', contato.endereco.logradouro);
    form.appendChild(ctt_input_logradouro);

    let ctt_input_bairro = document.createElement('input');
    ctt_input_bairro.className = 'form-control';
    ctt_input_bairro.id = 'ctt_input_bairro';
    ctt_input_bairro.setAttribute('value', contato.endereco.bairro);
    ctt_input_bairro.setAttribute('placeholder', contato.endereco.bairro);
    form.appendChild(ctt_input_bairro);

    let ctt_input_cidade = document.createElement('input');
    ctt_input_cidade.className = 'form-control';
    ctt_input_cidade.id = 'ctt_input_cidade';
    ctt_input_cidade.setAttribute('value', contato.endereco.cidade);
    ctt_input_cidade.setAttribute('placeholder', contato.endereco.cidade);
    form.appendChild(ctt_input_cidade);

    let ctt_input_estado = document.createElement('input');
    ctt_input_estado.className = 'form-control';
    ctt_input_estado.id = 'ctt_input_estado';
    ctt_input_estado.setAttribute('value', contato.endereco.estado);
    ctt_input_estado.setAttribute('placeholder', contato.endereco.estado);
    form.appendChild(ctt_input_estado);

    let ctt_input_numero = document.createElement('input');
    ctt_input_numero.className = 'form-control';
    ctt_input_numero.id = 'ctt_input_numero';
    ctt_input_numero.setAttribute('value', contato.endereco.numero);
    ctt_input_numero.setAttribute('placeholder', contato.endereco.numero);
    form.appendChild(ctt_input_numero);
    
    let btn_alt = document.createElement('button');
    btn_alt.appendChild(document.createTextNode('ALTERAR CONTATO'));
    btn_alt.setAttribute('class', 'btn btn-success');
    btn_alt.addEventListener('click', function(){
        
        //Verifica se o campo foi preenchido se não ele usa o placeholder para definir o valor
        let nome  = document.getElementById('ctt_input_nome').value || document.getElementById('ctt_input_nome').placeholder;
        let tel  = document.getElementById('ctt_input_telefone').value || document.getElementById('ctt_input_telefone').placeholder;
        let email  = document.getElementById('ctt_input_email').value || document.getElementById('ctt_input_email').placeholder;
        let cep  = document.getElementById('ctt_input_cep').value || document.getElementById('ctt_input_cep').placeholder;
        let log  = document.getElementById('ctt_input_logradouro').value || document.getElementById('ctt_input_logradouro').placeholder;
        let bairro  = document.getElementById('ctt_input_bairro').value || document.getElementById('ctt_input_bairro').placeholder;
        let cidade  = document.getElementById('ctt_input_cidade').value || document.getElementById('ctt_input_cidade').placeholder;    
        let estado  = document.getElementById('ctt_input_estado').value || document.getElementById('ctt_input_estado').placeholder;
        let nmr  = document.getElementById('ctt_input_numero').value || document.getElementById('ctt_input_numero').placeholder;
        
        let myContatcs = new contact(nome,tel,email,cep,log,bairro,cidade,estado,nmr);
        myContatcs.altContact(pos);
        showContacts();
    });
    id_li_ctt.appendChild(btn_alt);
}
*/
window.addEventListener("load", function(){
    showName();
    let ctt = new contact();
    ctt.showContacts();
});


btn_call_form.addEventListener('click', function(){
    var ctt_list = document.getElementById('ctt_list');
    let ctt = new contact();
    ctt.renderForm(ctt_list);
});