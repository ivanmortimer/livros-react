class Livro {
    private codigo: number;
    private codEditora: number;
    private titulo: string;
    private resumo: string;
    private autores: string[];

    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }

    // Getter para 'codigo'
    public getCodigoLivro(): number {
        return this.codigo;
    }

    // Setter para 'codigo'
    public setCodigoLivro(novoCodigo: number): void {
        this.codigo = novoCodigo;
    }
    
    // Getter para 'codEditora'
    public getCodEditora(): number {
        return this.codEditora;
    }

    // Getter para 'titulo'
    public getTitulo(): string {
        return this.titulo;
    }

    // Getter para 'resumo'
    public getResumo(): string {
        return this.resumo;
    }

    // Getter para 'autores'
    public getAutores(): string[] {
        return this.autores;
    }
}

export default Livro;
