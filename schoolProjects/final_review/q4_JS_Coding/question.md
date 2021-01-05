## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```

    The code sorts the array using the comparison of the positional arguments roo and raa, putting the array in acending order. To flip it you would just have to replace what is being returned with the opposite (raa-roo)

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console

### Answer: 

The issue with the code is that you are trying to access the constant "pi" before it has been created, fixing it is simply moving it to before anything trying to access it. Using `var pi =` would not help, because this is not an issue of mutating "pi", but rather an issue of trying to use it before it's assignment.