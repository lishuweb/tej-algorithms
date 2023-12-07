_Difficulty: Easy_

### Problem 1

## Remove Duplicates from Sorted Array

1. Given a sorted array of integers (not including negative integers)
2. Remove the duplicates in given array such that only non-duplicate integers remain
3. Order of the elements should be the same
4. Return the length of elements. The original array has to be mutated to not contain duplicates

### Example and Output

input arr = [0, 0, 1, 2, 2, 3, 3, 5] => arr = [0, 1, 2, 3, 5] => output 5

input arr = [1, 1, 2] => arr = [1, 2] => output 2

### Problem 2

## Two Sum

1. Given an array of integers, and a target value
2. Return indices of two numbers from the array whose sum is equal to the target value. The returned value should be in the form of an array
3. Do not repeat the same index, i.e. the solution should be two different numbers

### Example and Output

input arr = [0, 3, 5, 2, 4], target value = 9 => output [2, 4]

input arr = [11, 9, 7, 5], target value = 20 => output [0, 1]

### Problem 3

## Rotate Array

1. Given an array of integers, and a number
2. rotate the array to the right side by given number
3. return the mutated rotated array
4. number of steps will always be a positive number=

### Example and Output

input arr = [1, 2, 3, 4, 5, 6, 7], steps = 3 => output [5, 6, 7, 1, 2, 3, 4]
explaination:
1. rotation, steps from the right = [7,1,2,3,4,5,6]
2. rotation, steps from the right = [6,7,1,2,3,4,5]
3. rotation, steps from the right = [5,6,7,1,2,3,4]
