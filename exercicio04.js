class Retangulo {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.base * this.altura;
    }
  
    calcularPerimetro() {
      return 2 * (this.base + this.altura);
    }
  
    getBase() {
      return this.base;
    }
  
    setBase(base) {
      this.base = base;
    }
  
    getAltura() {
      return this.altura;
    }
  
    setAltura(altura) {
      this.altura = altura;
    }
  }