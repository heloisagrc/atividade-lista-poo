class Disciplina {
    constructor(nome, codigo, cargaHoraria) {
      this.nome = nome;
      this.codigo = codigo;
      this.cargaHoraria = cargaHoraria;
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getCodigo() {
      return this.codigo;
    }
  
    setCodigo(codigo) {
      this.codigo = codigo;
    }
  
    getCargaHoraria() {
      return this.cargaHoraria;
    }
  
    setCargaHoraria(cargaHoraria) {
      this.cargaHoraria = cargaHoraria;
    }
  }
  const disciplina = new Disciplina('Matemática', 'MTH101', 3);
  console.log(disciplina.getNome());
disciplina.setNome('Calculus I');
console.log(disciplina.getNome()); 