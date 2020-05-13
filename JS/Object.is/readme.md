#### 作用

用于判断x和y是否相等，它解决了`===`不能正确判断`+0`和`-0`,`NaN`和`NaN`这两种情况。

#### 实现

```javascript
function is (x, y) {
  if (x === y) {
    // 1 / +0 = +Infinty
    // 1 / -0 = -Infinty
    // +Infinty !== -Infinty
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 当x = NaN, y = NaN时应该返回true
    return x !== x && y !== y;
  }
} 
```

