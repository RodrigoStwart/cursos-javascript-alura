export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }
    //Impede que ele seja alterado.
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

}