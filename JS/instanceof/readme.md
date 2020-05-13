#### 原理

通过原型链查找。

#### 如何判断基本数据类型

需要重写`Symbol.hasInstance`方法

```javascript
class MyString {
  static [Symbol.hasInstance](x) {
    return typeof x === 'string'
  }
}
console.log('111' instanceof MyString)
```

#### 实现

```javascript
function myInstanceof(left, right) {
  if (typeof left !== 'object' || left === null) return false;
  let proto = left.__proto__;
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = proto.__proto__;
  }
}
```

