import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 8882233309);
let numeroDeContas = 0;

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 102);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, conta2);
var teste = prompt("Vamos testar");
console.log(teste);

//console.log(ContaCorrente.numeroDeContas);




