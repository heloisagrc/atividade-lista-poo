class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
      this.ladoA = ladoA;
      this.ladoB = ladoB;
      this.ladoC = ladoC;
    }
  
    calcularArea() {
      const semiPerimetro = (this.ladoA + this.ladoB + this.ladoC) / 2;
      return Math.sqrt(semiPerimetro * (semiPerimetro - this.ladoA) * (semiPerimetro - this.ladoB) * (semiPerimetro - this.ladoC));
    }
  
    calcularPerimetro() {
      return this.ladoA + this.ladoB + this.ladoC;
    }
  
    getLadoA() {
      return this.ladoA;
    }
  
    setLadoA(ladoA) {
      this.ladoA = ladoA;
    }
  
    getLadoB() {
      return this.ladoB;
    }
  
    setLadoB(ladoB) {
      this.ladoB = ladoB;
    }
  
    getLadoC() {
      return this.ladoC;
    }
  
    setLadoC(ladoC) {
      this.ladoC = ladoC;
    }
  }
  
  // Exemplo de uso:
  const meuTriangulo = new Triangulo(3, 4, 5);
  console.log(meuTriangulo.calcularArea()); 
  console.log(meuTriangulo.calcularPerimetro());
  console.log(meuTriangulo.getLadoA());
  meuTriangulo.setLadoA(6);
  console.log(meuTriangulo.getLadoA()); 