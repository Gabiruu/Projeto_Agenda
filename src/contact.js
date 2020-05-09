export class contact{
    constructor(nome,telefone,email,cep, logradouro, bairro, cidade, estado, numero){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cep = cep;
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.numero = numero;
    }
    
    setContact(){
        
        let contact = {
            nome: this.nome,
            telefone: this.telefone,
            email: this.email,
            endereco: {
                cep: this.cep,
                logradouro: this.logradouro,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado,
                numero: this.numero
            }
        }
        if(localStorage.getItem('list_contacts')){
            //RECUPERA  (JSON.parse traz a informção novamente como array)
            var list_contacts = JSON.parse(localStorage.getItem('list_contacts'));
            console.log('recuperou a lista');
        }else{
            //cria a variavel para ser usada para o "push" da função
            var list_contacts = [];
            console.log('criou a lista');
        }

        list_contacts.push(contact)

        localStorage.setItem('list_contacts', JSON.stringify(list_contacts));
    }

    setList(list){
        localStorage.setItem('list_contacts', JSON.stringify(list))
    }
    
    getContact(pos){
        let myContact_dados = JSON.parse(localStorage.getItem('list_contacts'));
        
        return myContact_dados[pos];
    }

    getListContact(){
        let myContact_dados = JSON.parse(localStorage.getItem('list_contacts'));
        
        return myContact_dados;
    }

    renderForm(parent){
        let el_parent = parent;
        el_parent.innerHTML = '';

        let form = document.createElement('div');
        form.className = 'form-group';

        let name_inpt = document.createElement('input');
        name_inpt.className = 'form-control';
        name_inpt.id = 'name_inpt';
        name_inpt.setAttribute('placeholder', 'Nome');
        
        let tel_inpt = document.createElement('input');
        tel_inpt.className = 'form-control';
        tel_inpt.id = 'tel_inpt';
        tel_inpt.setAttribute('placeholder', 'Telefone');

        let email_inpt = document.createElement('input');
        email_inpt.className = 'form-control';
        email_inpt.id = 'email_inpt';
        email_inpt.setAttribute('placeholder', 'Email');
        email_inpt.setAttribute('type', 'email');

        let cep_inpt = document.createElement('input');
        cep_inpt.className = 'form-control';
        cep_inpt.id = 'cep_inpt';
        cep_inpt.setAttribute('placeholder', 'CEP');

        let log_inpt = document.createElement('input');
        log_inpt.className = 'form-control';
        log_inpt.id = 'log_inpt';
        log_inpt.setAttribute('placeholder', 'Logradouro');

        let brr_inpt = document.createElement('input');
        brr_inpt.className = 'form-control';
        brr_inpt.id = 'brr_inpt';
        brr_inpt.setAttribute('placeholder', 'Bairro');

        let city_inpt = document.createElement('input');
        city_inpt.className = 'form-control';
        city_inpt.id = 'city_inpt';
        city_inpt.setAttribute('placeholder', 'Cidade');

        let estt_inpt = document.createElement('input');
        estt_inpt.className = 'form-control';
        estt_inpt.id = 'estt_inpt';
        estt_inpt.setAttribute('placeholder', 'Estado');
        
        let nbr_inpt = document.createElement('input');
        nbr_inpt.className = 'form-control';
        nbr_inpt.id = 'nbr_inpt';
        nbr_inpt.setAttribute('placeholder', 'Numero');

        let btn_alt = document.createElement('button');
        btn_alt.appendChild(document.createTextNode('SALVAR CONTATO'));
        btn_alt.setAttribute('class', 'btn btn-success');

        let cttArray = [name_inpt,tel_inpt,email_inpt,cep_inpt,log_inpt,brr_inpt,city_inpt,estt_inpt,nbr_inpt,btn_alt]; 

        cttArray.forEach(e => {
            form.appendChild(e);
        });

        el_parent.appendChild(form);

        btn_alt.addEventListener('click', function(){
            
            let nome  = document.getElementById('name_inpt').value;
            let tel  = document.getElementById('tel_inpt').value;
            let email  = document.getElementById('email_inpt').value;
            let cep  = document.getElementById('cep_inpt').value;
            let log  = document.getElementById('log_inpt').value;
            let bairro  = document.getElementById('brr_inpt').value;
            let cidade  = document.getElementById('city_inpt').value;
            let estado  = document.getElementById('estt_inpt').value;
            let nmr  = document.getElementById('nbr_inpt').value;
            
            let myContatcs = new contact(nome,tel,email,cep,log,bairro,cidade,estado,nmr);
            myContatcs.setContact();
            location.reload();
        });
    }

    showContacts(){
    var contato = new contact();
    var listContacts = [];
    listContacts = contato.getListContact();

    var ctt_list = document.querySelector('ul');
    ctt_list.innerHTML ='';
    
    let div_accordion = document.createElement('div');
    div_accordion.id = "accordion"
    teste.appendChild(div_accordion); 
    div_accordion.appendChild(ctt_list);
    //console.log(listContacts);

    listContacts.forEach(e => {
        let pos = listContacts.findIndex(i => i.nome === e.nome); 
        let btn_collapse = document.createElement('button');
        //let ctt_li = document.querySelector('ul');
        

        btn_collapse.innerHTML = e.nome;
        btn_collapse.className = 'btn btn-primary';
        btn_collapse.setAttribute('type','button');
        btn_collapse.setAttribute('data-toggle','collapse');
        btn_collapse.setAttribute('data-target','#li_'+pos );
        if(pos == 0){
            btn_collapse.setAttribute('aria-expanded','true');
        }else{
            btn_collapse.setAttribute('aria-expanded','false');
        }
        btn_collapse.setAttribute('aria-controls','li_'+pos );
        let card_head = document.createElement('div');
        card_head.id ='card_'+pos;



        
        ctt_list.appendChild(btn_collapse);
        
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
        ctt_li.setAttribute('data-parent', '#accordion');
        ctt_li.setAttribute('aria-labelledby', 'card_'+pos);

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
        ctt_li.appendChild(btn_del);
        btn_del.addEventListener('click', function(){
            contato.delContact(pos);
        });

        let btn_alt = document.createElement('button');
        btn_alt.appendChild(document.createTextNode('ALTERAR CONTATO'));
        btn_alt.setAttribute('class', 'btn btn-warning');
        ctt_li.appendChild(btn_alt);
        btn_alt.addEventListener('click', function(){
            contato.altContact(pos);
        });
    });
    }

    delContact(pos){
        let myListContacts = JSON.parse(localStorage.getItem('list_contacts'));
        myListContacts.splice(pos, 1);
        let ctt = new contact();
        ctt.setList(myListContacts);
        ctt.showContacts();
    }

    altContact(pos){
        let ctt = new contact();
        let contato = ctt.getListContact()[pos];

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
            
        //Verifica se o campo foi preenchido, se não ele usa o placeholder para definir o valor
        let nome  = document.getElementById('ctt_input_nome').value || document.getElementById('ctt_input_nome').placeholder;
        let tel  = document.getElementById('ctt_input_telefone').value || document.getElementById('ctt_input_telefone').placeholder;
        let email  = document.getElementById('ctt_input_email').value || document.getElementById('ctt_input_email').placeholder;
        let cep  = document.getElementById('ctt_input_cep').value || document.getElementById('ctt_input_cep').placeholder;
        let log  = document.getElementById('ctt_input_logradouro').value || document.getElementById('ctt_input_logradouro').placeholder;
        let bairro  = document.getElementById('ctt_input_bairro').value || document.getElementById('ctt_input_bairro').placeholder;
        let cidade  = document.getElementById('ctt_input_cidade').value || document.getElementById('ctt_input_cidade').placeholder;    
        let estado  = document.getElementById('ctt_input_estado').value || document.getElementById('ctt_input_estado').placeholder;
        let nmr  = document.getElementById('ctt_input_numero').value || document.getElementById('ctt_input_numero').placeholder;
        
        contato = {
            nome: nome,
            telefone: tel,
            email: email,
            endereco: {
                cep: cep,
                logradouro: log,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                numero: nmr
            }
        }

        let list_contacts = JSON.parse(localStorage.getItem('list_contacts'));
        list_contacts[pos] = contato;
        localStorage.setItem('list_contacts', JSON.stringify(list_contacts));
        ctt.showContacts();
        });
        id_li_ctt.appendChild(btn_alt);
    }
}