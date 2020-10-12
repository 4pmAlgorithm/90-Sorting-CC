///////////////////////////////////////////////////////
///////////////*** BUBBLE SORT QUESTION ***////////////
///////////////////////////////////////////////////////
//swap the elements in the array's order so the smallest number is at first and the largest number is at the last.

// pseudocode
// 1. start looping from with a variable called i the end of the array towards the beginning. 
// 2. start an inner loop with a variable called j from the beginning until i-1.
// 3. if arr[j] is greater than arr[j+1], swap those two values.
// 4. return the sorted array.





console.log(bubbleSort([9,8,7,6]))
//output [6,7,8,9]












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










///////////////////////////////////////////////////////
////////////*** INSERTION SORT QUESTION ***////////////
///////////////////////////////////////////////////////

//1. start by picking the second element in the array
//2. Now compare the second element with the one before it and swap if necessary. 
//3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion. (i.e. the left side) to place the element in the correct place. 
//4. repeat until the array is sorted. 






console.log(insertion([6,5,4,3,2,1]))
//output: [ 1, 2, 3, 4, 5, 6 ]










///////////////////////////////////////////////////////
////////////*** MERGE SORT QUESTION ***////////////
///////////////////////////////////////////////////////
// Merges two already sorted arrays

//pseudocode
// 1. create an empty arr, take a look at the smallest values in each input arr.
// 2. while there are still values, we haven't looked at ..
//     2-1. if the value in the first arr is smaller than the value in the second arr, push the val in the first arr into our results and move on to the next value in the first arr.
//     2-2. if the val in the first arr is larger than the val in the second arr, push the val in the second arr into our results and move on to the next val in the second arr. 
//     2-3. once we exhaust one arr, push in all remaining val from the other arr. 









console.log(merge([2, 3, 4, 5], [1, 100, 200, 300]))













///////////////////////////////////////////////////////
////////////*** QUICK SORT QUESTION ***////////////
///////////////////////////////////////////////////////

//PIVOT pseudo code
// 1. It will help to accept three arguments: an array, a start index, and an end index(these can default to 0 and the array length minus1, respectively)
// 2. Grab the pivot from the start of the array. 
// 3. Store the current pivot index in a variable(this will keep track of where the pivot should end up)
// 4. Loop through the array from the start until the end
//     4-1. If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// 5. swap the starting element (i.e. the pivot) with the pivot index
// 6. return the pivot index







//quicksort pseudocode
// 1. call the pivot helper function on the array
// 2. when the helper returns to you the updated pivot index,
// recursively call the pivot helper on the subarray to the left of that index, and the subaray to the right of that index
// 3. your base case occurs when you consider a subarray with less than 2 elements. 

    // The base case is an array with less than 2 elements because no sorting would be required.
    //The base case of quicksort is an array with one element because a one element array requires no sorting. In your code, p is the index of the first element and r is the index of the last element. The predicate p < r is only true for an array of at least size 2. In other words, if p >= r then you have an array of size 1 (or zero, or nonsense) and there is no work to do.






console.log(quickSort([9,8,7,11,6]))











///////////////////////////////////////////////////////
////////////*** RADIX SORT QUESTION ***////////////
///////////////////////////////////////////////////////



///////////////////////////////////////////////////
//***************RADIX SORT HELPER 1 ************//
///////////////////////////////////////////////////


// getDigit function returns the digit in num at the given place value.
// getDigit(12345,0)//5
// //if the given place is 0, the number at the location 0 is 5.
//the place counts starts from the right to left. 1 -> 10 -> 100 -> 1000 -> 10000 ...




///////////////////////////////////////////////////
//***************RADIX SORT HELPER 2 ************/
///////////////////////////////////////////////////
//how many numbers of numbers are there in the longest number (lol)





///////////////////////////////////////////////////
//***************RADIX SORT HELPER 3 ************/
///////////////////////////////////////////////////





///////////////////////////////////////////////////
//******************** RADIX SORT *****************/
///////////////////////////////////////////////////






console.log(radixSort([23, 334, 21, 3421, 1453, 9898, 7323]))