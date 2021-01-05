## Question A (30% credit): 

Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Hint: you may put it in a sample page, load it and check out the network tab in the Devtools.

Case 1:
    `<img src="mypic.jpg" style="visibility: hidden" alt="">`
    This does trigger a GET request

Case 2:
    `<img src="mypic.jpg" style="display:none" alt="">`
    This triggeres a GET request as well


## Question B (30% credit)

1. Describe the difference between a cookie, sessionStorage and localStorage. (150 words max)

### Answer:

LocalStorage is persistant data that has 5/10mb of storage and is only deleted after specific command, while sessionStorage is is data that has 5mb of storage and is deleted when a user closes the browser window, these both support client side reading only. Cookies are small text files of name-value pairs, that support both server and client side reading and have 4kb of storage. Deletion of cookies can be done in several different ways.