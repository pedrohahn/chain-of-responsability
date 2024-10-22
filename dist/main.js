"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const ValidadorNome_1 = require("./ValidadorNome");
const ValidadorEmail_1 = require("./ValidadorEmail");
const ValidadorSenha_1 = require("./ValidadorSenha");
function configurarValidadores() {
    const validadorNome = new ValidadorNome_1.ValidadorNome();
    const validadorEmail = new ValidadorEmail_1.ValidadorEmail();
    const validadorSenha = new ValidadorSenha_1.ValidadorSenha();
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
