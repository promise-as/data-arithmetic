// es5

// 函数：函数，构造器
// this指向要创建的对象
var Stack = function () {
    var items = []; // 私有

    // push 栈顶添加元素
    this.push = function (element) {
        items.push(element);
    }

    // pop 移除栈顶元素
    this.pop = function () {
        return items.pop();
    }

    // peek 检查栈顶
    this.peek = function () {
        return items[items.length - 1];
    }

    // 检查栈是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }

    // 清除栈
    this.clear = function () {
        items = [];
    }

    // 获取栈大小
    this.size = function () {
        return items.length;
    }

    this.getItems = function () {
        return items;
    }
}

// 栈实例：十进制到二进制转换
function binaryToDecimal(number){
    var s = new Stack();
    var remainder = 0;
    var binary = '';

    // 取余
    while(number > 0){
        remainder = number % 2
        // 入栈
        s.push(remainder);
        number = Math.floor(number / 2);
    }

    // 出栈
    while(!s.isEmpty()){
        binary += s.pop();
    }
    return binary;
}

console.log(binaryToDecimal(10));