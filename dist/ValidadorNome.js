"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorNome = void 0;
class ValidadorNome {
    constructor() {
        this.proximo = null;
    }
    setProximo(proximo) {
        this.proximo = proximo;
    }
    validar(dados) {
        if (!dados.nome || dados.nome.length < 3) {
            console.error("Erro: O nome deve ter pelo menos 3 caracteres.");
            return;
        }
        if (this.proximo) {
            this.proximo.validar(dados);
        }
    }
}
exports.ValidadorNome = ValidadorNome;
