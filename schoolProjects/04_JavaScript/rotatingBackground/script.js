const backgrounds = ['assets/background1.jpg', 'assets/background2.jpg', 'assets/background3.jpg'];
var index = 1

function rotate(){
    document.getElementById("bg").style.backgroundImage = `url(${backgrounds[index]})`
    index++;
    if (index >= backgrounds.length){
        index = 0
    }
}

setInterval(rotate, 3000);
