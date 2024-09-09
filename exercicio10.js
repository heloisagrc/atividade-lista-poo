class Gato {
  constructor(nome, raca, idade) {
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
  }

  miar() {
    return "Miau!";
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getRaca() {
    return this.raca;
  }

  setRaca(raca) {
    this.raca = raca;
  }

  getIdade() {
    return this.idade;
  }

  setIdade(idade) {
    this.idade = idade;
  }
}

// Exemplo de uso:
const meuGato = new Gato("Mingau", "Siamês", 2);
console.log(meuGato.miar()); 
console.log(meuGato.getNome()); 
meuGato.setNome("Mingau Novo");
console.log(meuGato.getNome()); 