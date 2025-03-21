// Declaração de uma variável 'games' que é um array vazio.
var games = []

// Declaração de uma função construtora 'Game' que cria objetos representando jogos.
function Game(a, b, c, d) {
    // Atribuindo o parâmetro 'a' à propriedade 'nome' do objeto.
    this.nome = a
    // Atribuindo o parâmetro 'b' à propriedade 'ano' do objeto.
    this.ano = b
    // Atribuindo o parâmetro 'c' à propriedade 'preco' do objeto.
    this.preco = c
    // Atribuindo o parâmetro 'd' à propriedade 'genero' do objeto.
    this.genero = d
}

// Cria um novo objeto 'jogo' usando a função construtora 'Game'.
// Os parâmetros são: nome do jogo, ano de lançamento, preço e gênero.
var jogo = new Game('God of war', 2018, 299, 'Ação-aventura')

// Adiciona o objeto 'jogo' ao final do array 'games'.
games.push(jogo);

// Imprime o conteúdo do array 'games' no console.
console.log(games);

// Criando  outro objeto 'game2' usando a função construtora 'Game'.
var game2 = new Game('The last of us', 2020, 399, 'suspense-aventura')

// Adicionando  o objeto 'game2' ao final do array 'games'.
games.push(game2);

// Imprimimdo novamente o conteúdo do array 'games' no console.
console.log(games);
