class Livro {
    constructor(titulo, autor, editora, anoPublicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.anoPublicacao = anoPublicacao;
    }
  
    getTitulo() {
      return this.titulo;
    }
  
    setTitulo(titulo) {
      this.titulo = titulo;
    }
  
    getAutor() {
      return this.autor;
    }
  
    setAutor(autor) {
      this.autor = autor;
    }
  
    getEditora() {
      return this.editora;
    }
  
    setEditora(editora) {
      this.editora = editora;
    }
  
    getAnoPublicacao() {
      return this.anoPublicacao;
    }
  
    setAnoPublicacao(anoPublicacao) {
      this.anoPublicacao = anoPublicacao;
    }
  }
  
  // Exemplo de uso:
  const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Abril", 1954);
  console.log(meuLivro.getTitulo()); 
  console.log(meuLivro.getAutor()); 
  meuLivro.setTitulo("O Senhor dos Anéis - Edição Especial");
  console.log(meuLivro.getTitulo()); 