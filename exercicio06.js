class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    emitirSom() {
        throw new Error("Método abstrato, deve ser implementado");
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }
}