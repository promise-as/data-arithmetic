// 优先级队列
var PriorityQueue = function(){
  var items = [];

  // 辅助类
  var QueueItem = function(element, priority){
    this.element = element;
    this.priority = priority;
  }
  
  // 入队
  this.enqueue = function(element, priority){
    var queueItem = new QueueItem(element, priority);

    // 是否添加进items
    var added = false;

    for(var i = 0; i < items.length; i++){
      // 判断优先级
      if(queueItem.priority > items[i].priority){
        // params: 位置，个数，元素
        items.splice(i, 0, queueItem);
        added = true;
        // 如果不终止，会重复添加
        break;
      }
    }
    
    // 优先级小的追加到后面
    if(!added){
      items.push(queueItem);
    }
  }

  // 查看数组
  this.getItems = function(){
    return items;
  }
}

var pq = new PriorityQueue();
pq.enqueue('小明', 10);
pq.enqueue('小红', 12);
console.log(pq.getItems());