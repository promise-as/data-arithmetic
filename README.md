## 数据结构与算法

### 01. 栈

- 定义一个构造函数

```js
var Stack = function () {
    // 如果声明一个数组，那么这个数组是这个构造函数的 私有变量
    var items = [1];
    // this 指向 new 出来的实例对象 s ，公有变量
    this.arr = [];
    this.push = function(element){
        items.push(element);
    }
}
var s = new Stack();
console.log(items)
```

- 方法实现

|  方法名   |     操作     |
| :-------: | :----------: |
|   push    | 栈顶添加元素 |
|    pop    | 栈顶拿出元素 |
|   peek    |   查看栈顶   |
| `isEmpty` |     检查     |
|   clear   | 移除全部元素 |
|   size    |  获取栈长度  |

