Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 
    Spans are in-line elements and in-line elements don't support vertical-margins.

1. Why can I not set the margin-top on the img with the id "pic" in the head section?
    The img element has in-line styling, which has a higher level of specificity than the styling done in the head section. Styling with higher-specificity takes precendent.
