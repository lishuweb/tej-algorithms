// 1. Given an array of integers, and a target value
// 2. Return indices of two numbers from the array whose sum is equal to the target value. The returned value should be in the form of an array
// 3. Do not repeat the same index, i.e. the solution should be two different numbers

function twoSum(arr, targetVal) 
{
    let i = 0;
    while (i < arr.length) 
    {
        for (k = i + 1; k < arr.length; k++) 
        {
            if (arr[i] + arr[k] === targetVal) 
            {
                return [i, k];
            }
        }
        i++;
    }
}
function twoSum(arr, targetValue) 
{
    let i=0;
    let j=arr.length - 1;
    while(i<arr.length)
    {
        if(arr[i] + arr[j] < targetValue)
        {
            i++;
        }
        if(arr[i] + arr[j] > targetValue)
        {
            j--;
        }
        if(arr[i] + arr[j] === targetValue)
        {
            return [i,j];
        }
    }
}

console.log(twoSum([2,4,5,9], 9));



