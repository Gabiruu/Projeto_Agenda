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
    
    getContact(){
        let myContact_dados = JSON.parse(localStorage.getItem('list_contacts'));
        
        return myContact_dados;
    }

    altContact(pos){
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
        let list_contacts = JSON.parse(localStorage.getItem('list_contacts'));
        list_contacts[pos] = contact;

        localStorage.setItem('list_contacts', JSON.stringify(list_contacts));
    }

}