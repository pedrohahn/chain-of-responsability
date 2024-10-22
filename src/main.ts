// main.ts
import { ValidadorNome } from './ValidadorNome';
import { ValidadorEmail } from './ValidadorEmail';
import { ValidadorSenha } from './ValidadorSenha';

function configurarValidadores(): ValidadorNome {
    const validadorNome = new ValidadorNome();
    const validadorEmail = new ValidadorEmail();
    const validadorSenha = new ValidadorSenha();

    validadorNome.setProximo(validadorEmail);
    validadorEmail.setProximo(validadorSenha);

    return validadorNome;
}

// Testando com diferentes entradas de dados
const validador = configurarValidadores();

const dadosValidos = {
    nome: "João",
    email: "joao@example.com",
    senha: "senhaSegura"
};

const dadosInvalidos1 = {
    nome: "Jo",
    email: "joao@example.com",
    senha: "senhaSegura"
};

const dadosInvalidos2 = {
    nome: "João",
    email: "joaoexample.com",
    senha: "senhaSegura"
};

const dadosInvalidos3 = {
    nome: "João",
    email: "joao@example.com",
    senha: "1234567"
};

// Testando dados válidos
console.log("Testando dados válidos:");
validador.validar(dadosValidos);

// Testando dados inválidos
console.log("\nTestando dados inválidos (Nome):");
validador.validar(dadosInvalidos1);

console.log("\nTestando dados inválidos (Email):");
validador.validar(dadosInvalidos2);

console.log("\nTestando dados inválidos (Senha):");
validador.validar(dadosInvalidos3);
