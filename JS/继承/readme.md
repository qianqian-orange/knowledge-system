#### 寄生拷贝继承

```javascript
function Parent (name) {
  this.name = name;
}
Parent.test = function () {}
Parent.prototype.eat = function () {
  console.log('eat');
}
function Child (name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
// 作用让子类能够调用父类的静态方法
Object.setPrototypeOf(Child, Parent); // 等价于 Child.__proto__ = Parent;
```
