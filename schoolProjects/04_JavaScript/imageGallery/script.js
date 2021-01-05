const imgs = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg', 'assets/4.jpg', 'assets/5.jpg', 'assets/6.jpg'];
index = 0;

function nextgal() {
    index++;
    if(index > 5){
        index = 0
    }
    document.querySelector("img").setAttribute("src", imgs[index])
};

function prevgal() {
    index--;
    if(index < 0){
        index = 5
    }
    document.querySelector("img").setAttribute("src", imgs[index])
};

document.getElementById("next").addEventListener("click", nextgal)

document.getElementById("prev").addEventListener("click", prevgal)