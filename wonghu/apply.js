function getAge() {
    var y= new Date().getFullYear()
    return y-this.birth

    
}

var xiaoming={
    name:"xiaoming",
    birth:1999,
    age:getAge

}


console.log(xiaoming.age())
console.log(getAge.apply(xiaoming))