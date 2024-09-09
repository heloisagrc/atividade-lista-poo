class Aluno {
    constructor(nome, matricula, curso) {
      this.nome = nome;
      this.matricula = matricula;
      this.curso = curso;
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getMatricula() {
      return this.matricula;
    }
  
    setMatricula(matricula) {
      this.matricula = matricula;
    }
  
    getCurso() {
      return this.curso;
    }
  
    setCurso(curso) {
      this.curso = curso;
    }
  }