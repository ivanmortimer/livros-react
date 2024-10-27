class Editora {
    private codEditora: number;
    private nome: string;

    constructor(codEditora: number, nome: string) {
        this.codEditora = codEditora;
        this.nome = nome;
    }

    // Métodos de acesso
    public getCodEditora(): number {
        return this.codEditora;
    }

    public getNomeEditora(): string {
        return this.nome;
    }
}

export default Editora;
