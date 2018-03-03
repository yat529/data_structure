// Queues
// Queues are first in, first out

function Queue() {
    // this queue
    this.collection = [],
    // the queue size
    this.size = function() {
        return this.collection.length;
    },
    // add element to the queue (end of the queue)
    this.enqueue = function(elem) {
        this.collection.push(elem);
    },
    // remove 1st element from the queue
    this.dequeue = function() {
        // NOTE: shift() is the JS Array prototype method, remove first element from an array
        // NOTE: pop() is also a JS Array prototype method, remove last element from an array
        this.collection.shift();
    },
    // return the collection
    this.print = function() {
        return this.collection;
    },
    // return the first element of the queue
    this.front = function() {
        return this.collection[0];
    }
}


var queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
console.log(queue1.size());
console.log(queue1.print());
queue1.dequeue();
console.log(queue1.front());
console.log(queue1.size());
console.log(queue1.print());



// Priority Queues
