import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js";

const cliente1 = new Cliente("Cristiano", 12345678999);
cliente1.cadastrarSenha("321");

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "321");



console.log(clienteEstaLogado);



