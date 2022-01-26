import { Conta } from "./Conta.js";


export class ContaCorrente extends Conta{
    static numeroDeContas = 0; //Static faz o atributo ser global para todas as instancias.

    constructor (cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    
    sacar(valor) {
        let taxa = 1.1;

        return this._sacar(valor, taxa);
    }
    

}