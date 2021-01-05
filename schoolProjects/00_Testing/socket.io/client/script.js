// ---------------------------------------------------------
// Select all HTML elements we will need for the project:  |
// ---------------------------------------------------------

// ------------- Nickname Elements We Need ------------------------------
// 1. Create a variable called "nickname" and select the div with the class
//	  "nickname"
var nickname = document.querySelector('.nickname')

// 2. Create a variable called "nicknameSubmit" and select the button with 
//	  the class "nickname__submit"
var nicknameSubmit = document.querySelector('.nickname__submit')

// 3. Create a variable called "nicknameInput" and select the input with the 
// 	  ID "nickname"
var nicknameInput = document.getElementById('nickname')


// -------------- Chat Elements We Need ---------------------------------
// 1. Create a variable called "message" and select the input with the ID
//	  "message"
var message = document.getElementById('message')

// 2. Create a variable called "chatMessages" and select the div with the 
//	  class "chat__messages"
var chatMessages = document.querySelector('.chat__messages')

// 3. Create a variable called "sendNewMessage" and select the button with 
//    the class "chat__submit"
var sendNewMessage = document.querySelector('.chat__submit')


// Create new io instance:
const socket = io()

// ---------------------------------------------------------
//      Set a new nickname in the session storage object   |
// ---------------------------------------------------------

// If no nickname is set then display the nickname modal that covers the screen
if(!sessionStorage.getItem('nickname')){
    nickname.style.display = 'initial'

    nicknameSubmit.addEventListener('click', ()=>{
        sessionStorage.setItem('nickname', nicknameInput.value)
        nickname.style.display = 'none'
        socket.emit('New User', sessionStorage.getItem('nickname'))
    })
}


// ------------------------------------
// Functions to create new messages:  |
// ------------------------------------

// Create a new user joined message
const newUserJoined = nickname => {
    return `
        <div class="chat__new-user-joined">
                <i>${nickname} has joined the chat</i>
        </div>
    `
}

// Create a new message from a user
const newUserMessage = (user, message) => {
    return `
        <div class="chat__user-message">
            <div class="chat__user-nickname">${user}</div>
            <div class="chat__user-text">
                ${message}
            </div>
        </div>
    `
}




// ------------------------------------
//          Socket Events             |
// ------------------------------------

// When the user clicks to send a new message emit that message and their nickname
sendNewMessage.addEventListener('click', ()=>{
    socket.emit('New Message', {
        nickname: sessionStorage.getItem('nickname'), 
        message: message.value})
})


// When the socket receives a new message
socket.on('New Message', data => {
    console.log(data)
    message.value = ''
    chatMessages.innerHTML += newUserMessage(data.nickname, data.message)
})

// When the socket receives a new user
socket.on("New User", user => {
    console.log(user)
    chatMessages.innerHTML += newUserJoined(user)
})

// Optimizations
// 1. Load all previous messages and users who joined
// 2. Add error handling so that users cannot enter empty nicknames or messages
// 3. Make it so that a user can press enter to send the message
// 4. Show when users disconnect from the chat
// 5. Allow users to pick their own color
// 6. InnerHTML is not a good way to insert new HTML. Try to find the appropriate way to do this