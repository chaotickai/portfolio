Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

Hint: Convert the string to an array and then loop over the array.

See example below ...

```
    This is a string
    There was string
      ^^^^^^^          <-- 7 differences
```

In the above example, the function should return 7.

### Answer:

stringCompare = (str1, str2) => {
  #Convert both strings to arrays of characters for easier comparrison
  arr1 = Array.from(str1)
  arr2 = Array.from(str2)

  #Initialize a counter for incongruencies
  let counter = 0

  #For loop to itteratee over the indices of the arrays
  for(let i=0 ; i < arr1.length ; i++){
    #Logic for comparing is there is a difference between the arrays at any given index
    if(arr1[i] !== arr2[i]){
      #Increasing the counter for every missmatch
      counter++
    }
  }

  #Returning the total number of incongruencies between the two strings
  return counter
}