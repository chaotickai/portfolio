### I'd like to empty the array below. Please provide any 2 methods with examples and explain in brief how to empty it.

var myArray = [1, 2, 3, 4, 5]      // it may have any number of elements

(
    Hints: 
        Method 1: overwrite the array with empty array (shown below, don't use this)
        Method 2: by the length property method
        Method 3: using the splice Array method
        Method 4: by popping each member of the array in a loop.
        Method 5: anything you come up with
)

### Sample answer:

    myArray = []    // will replace the original myArray with an empty array

### Your answers:
myArray.length = 0
If there array length is set to 0, no elements are allowed to exist in it at that moment, thus removing them.

myArray.splice(0, myArray.length)
Using splice in this way allows you to specify where you would like to start the removal as well as how much, so if you start at the beginning and go the full length, nothing will remain
