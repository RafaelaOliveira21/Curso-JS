// Escreva uma função que recebe 2 numeros e retorne o maior deles

/* function max(x, y) {
    if ( x > y) {
        return x;
    }
    // else {
        return y;
    // }
}*/ 

// const maior = max (1, 2);
// console.log(max (10, 2));

//=================================================

function max(x, y) {
    return x > y ? x : y;
}

console.log(max (10, 2));

//==========ARROW FUNCTION==========================

const max2 = (a, b) => {
    return a > b ? a : b;
};

console.log(max2(100, 20));

//==================================================

const max3 = (c, d) => c > d ? c : d;
console.log(max3(10, 5));