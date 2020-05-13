#### 概念

> W3C对BFC的定义如下： 浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为"visiable"的块级盒子，都会为他们的内容创建新的BFC（Block Fromatting Context， 即块级格式上下文）。

#### 触发条件

+ 绝对定位元素
+ 浮动元素
+ overflow不为visible元素
+ 根元素
+ 弹性元素

#### 作用

+ 防止浮动元素导致父元素高度塌陷
+ 避免外边距折叠

