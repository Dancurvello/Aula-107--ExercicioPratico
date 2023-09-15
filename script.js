// Criação de objetos
const pessoa1 = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
  };
  
  const pessoa2 = {
    nome: "Maria",
    idade: 25,
    cidade: "Rio de Janeiro"
  };
  
  const carro1 = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
  };
  
  const carro2 = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2022
  };
  
  // Criação de objetos com construtores
  function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
  
  const animal1 = new Animal("Rex", "Cachorro");
  const animal2 = new Animal("Whiskers", "Gato");
  
  // Percorrendo objetos
  function imprimirPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Cidade: ${pessoa.cidade}`);
  }
  
  function imprimirCarro(carro) {
    console.log(`Marca: ${carro.marca}`);
    console.log(`Modelo: ${carro.modelo}`);
    console.log(`Ano: ${carro.ano}`);
  }
  
  // Impressões por meio de acesso em objetos
  console.log("Pessoa 1:");
  imprimirPessoa(pessoa1);
  
  console.log("\nCarro 2:");
  imprimirCarro(carro2);
  
  console.log("\nAnimal 2:");
  console.log(`Nome: ${animal2.nome}`);
  console.log(`Tipo: ${animal2.tipo}`);