const cart = ['burro', 'lievito', 'pane', 'nutella', 'motosega'];

const cartElement = document.getElementById('carrello');
console.log(cartElement);
let i = 0;

while ( i < (cart.length)){
    const elementoSpesa = document.createElement('li');
    elementoSpesa.innerText = cart[i];
    cartElement.append(elementoSpesa);
     i++
    
}


