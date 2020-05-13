#### 方案一: 绝对定位 + margin

```css
.box {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

#### 方案二: 绝对定位 + transform

```css
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

#### 方案三: display

```css
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```