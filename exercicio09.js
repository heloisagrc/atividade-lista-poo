class Cachorro {
    constructor(nome, raca, idade) {
      this.nome = nome;
      this.raca = raca;
      this.idade = idade;
    }
  
    latir() {
      return "Au au!";
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
  

  const meuCachorro = new Cachorro("Bolt", "Vira-lata", 3);
  console.log(meuCachorro.latir());
  console.log(meuCachorro.getNome()); 
  meuCachorro.setNome("Bolt Novo");
  console.log(meuCachorro.getNome()); 