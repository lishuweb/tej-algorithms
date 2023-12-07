function removeDuplicate(arr) 
{
  debugger;
  for (let i = 0; i < arr.length; i++) 
  {
    let j = i + 1;
    if (arr[i] === arr[j]) 
    {
      arr.splice(i + 1, 1);
    }
  }
  return arr.length;
}
removeDuplicate([1, 1, 2, 3, 3, 4]);

//My
function removeDuplicates(arr) 
{
  let i = 0;
  while (i < arr.length) 
  {
    if (arr[i] !== arr[i + 1]) 
    {
      i++;
    } 
    else 
    {
      arr.slice(i, 1);
    }
  }
  return arr.length;
}

// Hash Map
function removeDuplicate(arr) 
{
  let seen = {};
  let uniqueArr = [];
  let i = 0;
  while (i < arr.length) 
  {
    if (!seen[arr[i]]) 
    {
      seen[arr[i]] = true;
      uniqueArr.push(arr[i]);
    }
    i++;
  }
  return uniqueArr.length;
}

removeDuplicate([1, 2, 2, 3, 3, 5]);

// function rotateArray(arr, k)
// {
//   debugger;
//   let val = 0;
//   let count = 0;
//   while(arr.length - 1 > k)
//   {
//     val = Number(arr.splice(arr.length - 1,1));
//     arr.unshift(val);
//     count ++;
//     if(count === k)
//     {
//       return arr;
//     }
//   }
// }

// console.log(rotateArray([1,2,3,4,5], 2));

