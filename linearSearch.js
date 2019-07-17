Q : Linear Search
Problem: Given an array arr[] of n elements, write a function to search a given element x in arr[].

Examples :

Input : arr[] = {10, 20, 80, 30, 60, 50, 
                     110, 100, 130, 170}
          x = 110;
Output : 6
Element x is present at index 6

Input : arr[] = {10, 20, 80, 30, 60, 50, 
                     110, 100, 130, 170}
           x = 175;
Output : -1
Element x is not present in arr[].
---------------------------------->


function linearSearch(array, toFind){
 for(let i = 0; i < array.length; i++){
   if(array[i] === toFind)
   return i;
 }
 return -1;
}

console.log(linearSearch([10, 20, 80, 30, 60, 50,110, 100, 130, 170],110));

