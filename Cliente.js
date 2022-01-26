export class Cliente{
    get cpf(){
        return this._cpf;
    }
    //Impede que ele seja alterado.
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
        
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }    
    
    autenticar(senha){
        return senha == this._senha;
    }

}
