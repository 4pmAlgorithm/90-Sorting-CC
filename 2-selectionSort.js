///////////////////////////////////////////////////////
////////////*** SELECTION SORT QUESTION ***////////////
///////////////////////////////////////////////////////

//place the smallest value at the beginning

//pseudo code
//1. store the first element as the smallest values you've seen so far.
//2. compare this item to the next item in the array until you find a smaller number.
//3. if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array. 
//4. if the "mininum" is not the value(index) you initially began with, swap the two values.
//5. repeat this with the next element until the array is sorted

//TIME: O(N^) better than bubble but not the best sorting solution







console.log(selectionSort([9,8,7,6]))
//output: [6,7,8,9]