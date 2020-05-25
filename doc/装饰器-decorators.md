# 作用
用于修改类及其成员
# 声明方式
* 装饰器

decorator.ts
```
function decorator (target:any) {
    console.dir(target)
}
@decorator
class Animal {

}
console.dir(Animal);
```
* 装饰器工厂
decorator.ts
```
function decoratorFactory () {
    return function (target: any){
        console.dir(target);
    }
}
@decoratorFactory()
class Animal {

}
console.dir(Animal);
```
