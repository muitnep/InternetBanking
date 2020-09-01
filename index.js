import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 14000, 98745623091);
diretor.CadastrarSenha("123456");
const gerente = new Gerente("Mayane", 7000, 23487612398);
gerente.CadastrarSenha("098765");

const cliente = new Cliente("Lívia", 32143254388, "123654");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"098765");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "010204");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
