// ValidadorEmail.ts
import { IValidador } from './IValidador';

export class ValidadorEmail implements IValidador {
    private proximo: IValidador | null = null;

    setProximo(proximo: IValidador): void {
        this.proximo = proximo;
    }

    validar(dados: any): void {
        if (!dados.email || !dados.email.includes('@')) {
            console.error("Erro: O email deve conter um '@'.");
            return;
        }
        if (this.proximo) {
            this.proximo.validar(dados);
        }
    }
}
