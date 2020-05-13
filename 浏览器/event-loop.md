#### 执行和运行的区别
    执行一般依赖于环境，比如node, 浏览器等，不同环境下Javascript的执行机制可能不同。而运行是指Javascript的解析引擎，这是统一的。
#### 宏任务和微任务
  + 宏任务: `setTimeout`,`setInterval`,`I/O`,`UI Render`,`setImmediate`等。
  + 微任务: `MutationObserve`,`Promise.then`,`process.nextTick`等。