//Classe abstrata
import { SistemaAutenticacao } from "../SistemaAutenticacao.js";
export class Conta {
    constructor (saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error ("Você não pode instanciar a classe tipo Conta diretamente");

        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }   
    
    }

    get cliente(){
        return this._cliente;
    }




    //Metodo Abstrato
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

    }
    
    depositar(valor){
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        return;
    }


    
}