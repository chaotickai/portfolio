Consider the following code.  What would be console logged?  Why? (50%)

### Answer:
"Apple type is Clementine" would be console logged because the variable orange is a refference to apple instead of a true copy, meaning when you change orange, you also change apple.

What would you change to copy an object below. You'll notice that the Apple type is mis-represented in the last line below. How can Apple type be "Clementine"??

<pre>
    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple;

    orange.type = 'Clementine';

    console.log('Apple type is ', apple.type)
</pre>

### Answer: 
To make orange into a true copy of apple instead, you have a few options, but I would alter line 14 to be "var orange = {...apple};". This will cause the console log to properly represent Apple type.