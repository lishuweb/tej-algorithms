function rotate(arr, rotateNum) 
{
  debugger;
  rotateNum = rotateNum % arr.length;

  let slicedVal = arr.slice(arr.length - rotateNum);

  arr.splice(arr.length - rotateNum, rotateNum);
  arr.splice(0, 0, ...slicedVal);
  return arr;
}

