export class adm{
    constructor(nome,login,senha){
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }
    setAdm(){
        var dados_adm = {
            nome: this.nome,
            login:  this.login,
            senha: this.senha
        }
        return localStorage.setItem('dados_adm', JSON.stringify(dados_adm));
    }

    getAdm(){
        //var myAdm_dados = new adm();
        var myAdm_dados = JSON.parse(localStorage.getItem('dados_adm'));
        
        return myAdm_dados;
    }

    altAdm(){

    }

    delAdm(){

    }
}