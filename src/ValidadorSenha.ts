// ValidadorSenha.ts
import { IValidador } from './IValidador';

export class ValidadorSenha implements IValidador {
    private proximo: IValidador | null = null;

    setProximo(proximo: IValidador): void {
        this.proximo = proximo;
    }

    validar(dados: any): void {
        if (!dados.senha || dados.senha.length < 8) {
            console.error("Erro: A senha deve ter pelo menos 8 caracteres.");
            return;
        }
        if (this.proximo) {
            this.proximo.validar(dados);
        }
    }
}
