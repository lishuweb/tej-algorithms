class createNode
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class Stack
{
    constructor()
    {
        this.top = null;
    }
    push(data)
    {
        let newNode = new createNode(data);
        if(this.top === null)
        {
            this.top = newNode;
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
    }
    pop()
    {
        if(this.top === null)
        {
            return null;
        }
        let poppedValue = this.top;
        this.top = this.top.next;
        return poppedValue.data;
    }
    peek()
    {
        return this.top.data;
    }
}
debugger;
let stk = new Stack();
console.log(stk);
stk.push(3);
stk.push(4);
stk.push(5);
stk.push(6);
console.log(stk,{depth: null});
console.log(stk.pop(), "popped");
console.log(stk.peek(), "peeked");
console.log(stk);
