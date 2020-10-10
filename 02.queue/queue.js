var Queue = function () {
  var items = [];

  // 入对
  this.enqueue = function (element) {
    items.push(element);
  }

  // 出队
  this.dequeue = function () {
    return items.shift();
  }

  // 查看队头
  this.front = function () {
    return items[0];
  }

  // 检查队列是否为空
  this.isEmpty = function () {
    return items.length === 0;
  }

  // 检查队列长度
  this.size = function () {
    return items.length;
  }

}

// 击鼓传花
function chuanhua(names, number){
  var queue = new Queue();
  // 入队
  for(var i = 0 ; i < names.length; i++){
    queue.enqueue(names[i]);
  }

  // 淘汰玩家
  while(queue.size > 1){
    for(var i = 0; i < number - 1; i++){
      // 把第一名放到最后，形成环状
      queue.enqueue(queue.dequeue());
    }
    // 出队
    queue.dequeue();
  }

  // 剩最后一名
  return queue.dequeue();
}
// 玩家列表
var names = ['a','b','c','d','e','f'] // 一直传 -》 直到最后一名玩家
// 游戏规则
var number = 3;
console.log(chuanhua(names, number))