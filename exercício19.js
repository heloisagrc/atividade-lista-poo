// Classe Veiculo
class Veiculo {
    constructor(placa, modelo, capacidade) {
      this.placa = placa;
      this.modelo = modelo;
      this.capacidade = capacidade;
      this.passageiros = 0;
    }
  
    getPlaca() {
      return this.placa;
    }
  
    setPlaca(placa) {
      this.placa = placa;
    }
  
    getModelo() {
      return this.modelo;
    }
  
    setModelo(modelo) {
      this.modelo = modelo;
    }
  
    getCapacidade() {
      return this.capacidade;
    }
  
    setCapacidade(capacidade) {
      this.capacidade = capacidade;
    }
  
    getPassageiros() {
      return this.passageiros;
    }
  
    setPassageiros(passageiros) {
      this.passageiros = passageiros;
    }
  
    verificarLotacao() {
      if (this.passageiros > this.capacidade) {
        throw new Error("Capacidade do veículo ultrapassada!");
      }
    }
  }
  
  // Classe Onibus
  class Onibus extends Veiculo {
    constructor(placa, modelo, capacidade, linha) {
      super(placa, modelo, capacidade);
      this.linha = linha;
    }
  
    getLinha() {
      return this.linha;
    }
  
    setLinha(linha) {
      this.linha = linha;
    }
  }
  
  // Classe Metro
  class Metro extends Veiculo {
    constructor(placa, modelo, capacidade, numeroDeVagoes) {
      super(placa, modelo, capacidade);
      this.numeroDeVagoes = numeroDeVagoes;
    }
  
    getNumeroDeVagoes() {
      return this.numeroDeVagoes;
    }
  
    setNumeroDeVagoes(numeroDeVagoes) {
      this.numeroDeVagoes = numeroDeVagoes;
    }
  }
  
  // Classe Bilhete
  class Bilhete {
    constructor(codigo, saldo) {
      this.codigo = codigo;
      this.saldo = saldo;
    }
  
    getCodigo() {
      return this.codigo;
    }
  
    setCodigo(codigo) {
      this.codigo = codigo;
    }
  
    getSaldo() {
      return this.saldo;
    }
  
    setSaldo(saldo) {
      this.saldo = saldo;
    }
  
    recarregarSaldo(valor) {
      this.saldo += valor;
    }
  }