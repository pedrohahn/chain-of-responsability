// ValidadorNome.ts
import { IValidador } from './IValidador';

export class ValidadorNome implements IValidador {
    private proximo: IValidador | null = null;

    setProximo(proximo: IValidador): void {
        this.proximo = proximo;
    }

    validar(dados: any): void {
        if (!dados.nome || dados.nome.length < 3) {
            console.error("Erro: O nome deve ter pelo menos 3 caracteres.");
            return;
        }
        if (this.proximo) {
            this.proximo.validar(dados);
        }
    }
}
