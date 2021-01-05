### Review how you may iterate over Javascript collections (objects, arrays, etc.). Ref: https://www.digitalocean.com/community/tutorials/for-loops-for-of-loops-and-for-in-loops-in-javascript

- List examples of ways to iterate over JS collections (be brief).
    You have several options such as map, for loops, for...in loops, forEach methods, and for-of statements. Though most of these are used mainly for arrays or strings.

- What would be your choice of an iterator function to loop over the elements of an object? Why?
    My choice would be a for...in loop, because it seems easiest to work with in terms of actually using the information you get, i.e. element names. It also seems to be the prevailing choice across the community wich would mean easier translation to other coders.

- What would be your choice of an iterator for arrays? Why?
    I personally like the map method, as it takes a function as it's argument, meaning the function can be defined elsewhere or in-line. I also like that it then returns a new array, making assignment and storage of the results easy.
