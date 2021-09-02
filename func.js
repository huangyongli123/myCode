var abs =function (x) {
    if (typeof x !== "number"){
        throw "Not a number";
    }

    if (x>0){
        return x
    }else {
        return `我是负数${x}`
    }

}

// abs(12)
// console.log(abs(12,"balbalbablba",null))//传入多余的参数并没有问题


console.log(abs(-14))