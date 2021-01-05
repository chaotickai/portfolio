In JavaScript, how do you append a value to an array?  List 4 ways you can find (you may be able to find more) (25% credit).  
array.push()
array.unshift()
array.splice()
array.concat()

Provide example code showing the use of each of the methods you list. (40% credit)

var array1 = [1, 2, 3, 4, 5]
var array2 = [7, 8, 9, 10]

array1.push(6)
array1.unshift(0)
array1.splice(1, 0, .3, .6, .9)
array1.concat(array2)


How do you remove a particular member from the array?  Provide small sample. (35% credit)

There are several methods, but to be very specific I like the filter method.

array1 = array1.filter(name => name != 2)