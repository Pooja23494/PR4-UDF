// Recursion

const fact = (n) => {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
console.log('Factorial is : ' + fact(5));
