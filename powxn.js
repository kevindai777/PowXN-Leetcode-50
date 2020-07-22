//Objective is to implement 'Math.pow' without any of the obvious built-in libraries

let x = 2.00000, n = 10


//O(logn) recursive solution that multiplies the number by itself over and over
//while dividing the exponent correctly

if (n <= -2147483648 && x == -1) {
    return 1
}

if (n <= -2147483648 && x !== 1) {
    return 0
}

if (n == 0) {
    return 1
}

if (n < 0) {
    x = 1 / x
    n = -n
}

//2^10 == 4^5
//10 (1010) >> 1 == 5 (0101)
//The same thing as dividing the exponent by 2 everytime
let p = myPow(x * x, n >> 1)

//Is there still an exponent left over? 
//If so, multiply it one more time
return n & 1 ? x * p : p