function foo(a,b,f) {
    return f(a)+f(b)

}


var x = foo(7,7,Math.abs)

console.log(x)