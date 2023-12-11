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
    min()
    {
        let minVal = this.top.data;
        // console.log(minVal, "minValll");
        while(this.top.next !== null)
        {
            // console.log("hello");
            if(this.top.next.data < minVal)
            {
                minVal = this.top.next.data;
            }
            this.top = this.top.next;
        }
        return minVal;
    }
}

let stk = new Stack();
stk.push(2);
stk.push(3);
stk.push(4);
stk.push(5);
console.log(stk.peek(), "peeked");
console.log(stk.pop(), "popped");
console.log(stk.min());
console.log(stk);
