// IValidador.ts
export interface IValidador {
    setProximo(proximo: IValidador): void;
    validar(dados: any): void;
}
