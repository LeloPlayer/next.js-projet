const array = [2,3,4,5,6]; // Criando array

array.forEach(item =>{ // para cada item do array (item)
    if(item % 2 === 0){ // se fr par...
        console.log(`O numero ${item} é par`); // faça isso..
    }
    else{ // se nao for...
        console.log(`O numero ${item} é impar`); // faça isso..
    }
});