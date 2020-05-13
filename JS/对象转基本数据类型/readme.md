#### 流程

+ 调用`Symbol.toPrimitive`方法，返回结果
+ 调用`valueOf`方法，如果转为原始类型则返回
+ 调用`toString`方法，如果转为原始类型则返回
+ 报错

#### 实践

```javascript
// 如何让if (a == 1 && a == 2) 成立
let a {
  val: 0,
  toString() {
    this.val++;
    return this.val;
  }
}
```

