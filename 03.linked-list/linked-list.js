var LinkedList = function () {

  // 链表头
  var head = null;
  // 链表长度
  var length = 0;

  // 辅助类：节点
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }


  // 1.链表尾部添加元素
  this.append = function (element) {
    var node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      var current = head;
      while (current.next) {
        current = current.next;
      }
      // while循环执行完之后，current已经是链表最后一项了
      current.next = node;
    }
    length++;
  }

  // 2.插入元素
  this.insert = function (position, element) {
    if (position < 0 || position > length) return false;

    var node = new Node(element);
    if (position === 0) {
      node.next = head;
      head = node;
    } else {
      var index = 0;
      var previous = null;
      var current = head;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      // 上一个的 next，指向 node
      previous.next = node;
      // node 的 next，指向 current
      node.next = current;
    }
    length++;
    return true;
  }

  // 3.移除任意位置元素
  this.removeAt = function (position) {
    if (position < 0 || position >= length) return false;

    var current = head;
    if (position === 0) {
      head = head.next;
    } else {
      var index = 0;
      var previous = null;
      while(index++ < position){
        previous = current;
        current = current.next;
      }
      // previous 的 next 指向 current 的 next
      previous.next = current.next;
    }
    length--;
    return current.element;
  }

  this.getHead = function () {
    return head;
  }

}
var l = new LinkedList();
l.append(1);
l.append(3);
l.append(5);
// console.log(l.insert(1, 2))
// l.removeAt(0)
// console.log(l.removeAt(1))
l.invert();

console.log(l.getHead())