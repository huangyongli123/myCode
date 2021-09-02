//argument可接收传入的所有参数,即使函数没有定义任何的参数，也可以接收

var abs=function () {
    if (arguments.length===0){
        return 0
    }
    var a=arguments[0]
    return a>=0 ? a :-a
}

console.log(abs())
console.log(abs(10))
console.log(abs(-9))
