class Endereco {
    constructor(rua, numero, bairro, cidade, estado) {
      this.rua = rua;
      this.numero = numero;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
    }
  
    getRua() {
      return this.rua;
    }
  
    setRua(rua) {
      this.rua = rua;
    }
  
    getNumero() {
      return this.numero;
    }
  
    setNumero(numero) {
      this.numero = numero;
    }
  
    getBairro() {
      return this.bairro;
    }
  
    setBairro(bairro) {
      this.bairro = bairro;
    }
  
    getCidade() {
      return this.cidade;
    }
  
    setCidade(cidade) {
      this.cidade = cidade;
    }
  
    getEstado() {
      return this.estado;
    }
  
    setEstado(estado) {
      this.estado = estado;
    }
  }
  
  class Data {
    constructor(dia, mes, ano) {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
    }
  
    getDia() {
      return this.dia;
    }
  
    setDia(dia) {
      this.dia = dia;
    }
  
    getMes() {
      return this.mes;
    }
  
    setMes(mes) {
      this.mes = mes;
    }
  
    getAno() {
      return this.ano;
    }
  
    setAno(ano) {
      this.ano = ano;
    }
  }
  
  class Empresa {
    constructor(nome, cnpj) {
      this.nome = nome;
      this.cnpj = cnpj;
      this.endereco = new Endereco();
      this.dataDeCriacao = new Data();
    }
  
    getNome() {
      return this.nome;
    }
  
    setNome(nome) {
      this.nome = nome;
    }
  
    getCnpj() {
      return this.cnpj;
    }
  
    setCnpj(cnpj) {
      this.cnpj = cnpj;
    }
  
    getEndereco() {
      return this.endereco;
    }
  
    setEndereco(endereco) {
      this.endereco = endereco;
    }
  
    getDataDeCriacao() {
      return this.dataDeCriacao;
    }
  
    setDataDeCriacao(dataDeCriacao) {
      this.dataDeCriacao = dataDeCriacao;
    }
  }
  