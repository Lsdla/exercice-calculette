let input = ''; // prend une valeur vide par defaut
function showValue(button){
    input = input + button.value; // permet de stocker la valeur du button
    document.getElementById('output').innerHTML = input // permet d'afficher la valeur de input dans le output.
};

function result(button){ // la function result fait reference à la div du button '=' dans le html
    document.getElementById('output').innerHTML = eval(input); // La fonction eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.
};

function reset(button){
    document.getElementById('output').innerHTML = '0';
    input = '';
};

function remiseZero(button){
    input = input.replace(input.slice(), ''); // slice() prend la derniere chaine de caractère ,
    document.getElementById('output').innerHTML = input; // replace permet de remplacer une chaine par une autre 
};



