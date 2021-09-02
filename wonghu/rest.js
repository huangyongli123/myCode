function foo(a, b) {
    var i, rest=[];
    if (arguments.length > 2) {
        for (i = 2;i < arguments.length;i++) {
            rest.push(arguments[i]);
        }
    }
    console.log("a = " + a)
    console.log("b = " + b)
    console.log(rest)

}

foo(1,2,3,4)


//获取额外的参数，可以用rest

function abs(a,b,...rest) {
    console.log("a = "+a)
    console.log("b = "+b)
    console.log(rest)

}

abs(1,2,3,4,5,6)