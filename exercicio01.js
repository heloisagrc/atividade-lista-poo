class Pessoa {
    constructor(nome, idade, altura) {
      this.nome = nome;
      this.idade = idade;
      this.altura = altura;
    }
    

  
    get nome() {
      return this.nome;
    }
  
    set nome(nome) {
      if (typeof nome !== 'string') {
        throw new Error('O nome deve ser uma string');
      }
      this.nome = nome;
    }
  
    get idade() {
      return this._idade;
    }
  
    set idade(idade) {
      if (typeof idade !== 'number' || idade < 0) {
        throw new Error('A idade deve ser um número não negativo');
      }
      this.idade = idade;
    }
  
    get altura() {
      return this._altura;
    }
  
    set altura(altura) {
      if (typeof altura !== 'number' || altura < 0) {
        throw new Error('A altura deve ser um número não negativo');
      }
      this._altura = altura;
    }
  
    toString() {
      return `Nome: ${this.nome}\nIdade: ${this.idade} anos\nAltura: ${this.altura} m`;
    }
  }