"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorSenha = void 0;
class ValidadorSenha {
    constructor() {
        this.proximo = null;
    }
    setProximo(proximo) {
        this.proximo = proximo;
    }
    validar(dados) {
        if (!dados.senha || dados.senha.length < 8) {
            console.error("Erro: A senha deve ter pelo menos 8 caracteres.");
            return;
        }
        if (this.proximo) {
            this.proximo.validar(dados);
        }
    }
}
exports.ValidadorSenha = ValidadorSenha;
