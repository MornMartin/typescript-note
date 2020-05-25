function decorator (target:any) {
    console.dir(target)
}
function decoratorFactory () {
    return function (target: any){
        console.dir(target);
    }
}
@decorator
@decoratorFactory()
class Animal {

}
console.dir(Animal);