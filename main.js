/* Carro 2014*/

function Carro (a,b,c,d,e){ // Criando funçao e classe
    this.modelo=  a
    this.cor = b // atributos da classe
    this.ano = c
    this.valor= d
    this.popular = e; 
    
}
 var carro = new Carro('Ferrari 458 italy edition', 'preto', 2014, 1200000, false)


console.log(carro);
