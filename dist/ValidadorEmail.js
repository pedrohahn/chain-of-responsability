"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorEmail = void 0;
class ValidadorEmail {
    constructor() {
        this.proximo = null;
    }
    setProximo(proximo) {
        this.proximo = proximo;
    }
    validar(dados) {
        if (!dados.email || !dados.email.includes('@')) {
            console.error("Erro: O email deve conter um '@'.");
            return;
        }
        if (this.proximo) {
            this.proximo.validar(dados);
        }
    }
}
exports.ValidadorEmail = ValidadorEmail;
