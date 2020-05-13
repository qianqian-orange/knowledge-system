#### 什么是浮动

浮动元素会向右向左移动，直到碰到父元素或浮动元素为止。

#### 特点

+ 脱离标准文档流。

  浮动不会影响普通元素的布局，但是存在盖住普通元素的风险。

+ 字围
+ 贴边
+ 可以设置宽高

#### 缺点

浮动元素会使父级元素高度塌陷。

#### 清除浮动

+ 内建墙

  ```html
  <div class="container">
    <div class="panel"></div>
    <div class="panel"></div>
    <div style="clear: both;"></div>
  </div>
  ```

+ 外建墙

  ```html
  <div class="container">
    <div class="panel"></div>
    <div class="panel"></div>
  </div>
  <div style="clear: both;"></div>
  ```

+ 伪类 + clear

  ```scss
  .clearfix {
    &::before, &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  ```

+ BFC

  