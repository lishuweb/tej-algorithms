function merge(left, right)
{
    let outputArray = [];
    while(left.length && right.length)
    {
        if(left[0] < right[0])
        {
            outputArray.push(left.shift());
        }
        else
        {
            outputArray.push(right.shift());
        }
    }  
    while(left.length)
    {
        outputArray.push(left.shift());
    }
    while(right.length)
    {
        outputArray.push(right.shift());
    }
    return outputArray;
}

function mergeSort(arr)
{
    if(arr.length < 2)
    {
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([8,7,3,6,2,3,1]));