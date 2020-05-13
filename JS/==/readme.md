#### 流程

+ x和y的类型是否相同，如果相同比较值是否相同
+ x和y是null和undefined或undefined和null,则返回true
+ x和y是String和Number, 把String转成Number类型在比较
+ x和y其中一方为Boolean类型，则将Boolean转成Number类型在比较
+ x和y一方为Object,另一方为String, Number,或Symbol类型，则把Object转成基本数据类型在比较
+ return false

