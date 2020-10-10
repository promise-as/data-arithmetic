var LinkedList = function(){

  // 链表头
  var head = null;
  // 链表长度
  var length = 0;

  // 辅助类：节点
  var Node = function(element){
    this.element = element;
    this.next = null;
  }

  // 1.链表尾部添加元素
  this.append = function(element){
    var node = new Node(element);

    if(head === null){
      head = node;
    }else{
      var current = head;
      while(current.next){
        current = current.next;
      }
      // while循环执行完之后，current已经是链表最后一项了
      current.next = node;
    }

    length++
  }

  // 2.插入元素
  this.insert = function(postion, element){
    if(postion < 0 || postion > length) return false;

    var node = new Node(element);
    var current = head;
    if(postion === 0){
      head = node;
      head.next = current;
    }else if(postion === length){
      this.append(element);
    }else{
      var index = 0;
      while(index < postion){
        current = current.next;
      }
      // 中间插入
    }
  }

  this.getHead = function(){
    return head;
  }

}
var l = new LinkedList();
l.append(1);
l.append(3);
l.insert(2, 2);

console.log(l.getHead())