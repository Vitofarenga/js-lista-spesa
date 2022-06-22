const cart = ['burro', 'lievito', 'pane', 'nutella', 'motosega'];
const cartElement = document.getElementById('carrello')

let i = 0;

while ( i < (cart.length)){
    const nuovoElemento = document.createElement('li');
    nuovoElemento.innerHTML = cart[i];
    cartElement.append(nuovoElemento);
    i++;
    
    
     
}


