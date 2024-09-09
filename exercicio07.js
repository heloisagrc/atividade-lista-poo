class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    calcularTotal() {
      return this.preco * this.quantidade;
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getPreco() {
      return this.preco;
    }
  
    setPreco(preco) {
      this.preco = preco;
    }
  
    getQuantidade() {
      return this.quantidade;
    }
  
    setQuantidade(quantidade) {
      this.quantidade = quantidade;
    }
  }