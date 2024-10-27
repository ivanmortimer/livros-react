class Livro {
    public codigo: number = 0;
    public codEditora: number = 0;
    public titulo: string = "";
    public resumo: string = "";
    public autores: string[] = [];

    public constructor(codigo: number, codEditora: number) {
        this.codigo = codigo;
        this.codEditora = codEditora;
    }
}

export default Livro;
