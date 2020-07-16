var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var reset = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
colorDisplay.textContent = pickedColor;
var isEasyMode = false;
var btnAudio = new Audio('https://www.soundjay.com/button/sounds/button-6.mp3');
var correctAudio = new Audio('https://www.soundjay.com/button/sounds/button-7.mp3');
var errorAudio = new Audio('https://www.soundjay.com/button/sounds/button-10.mp3');

for(var i=0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            correctAudio.play();        
            changeColors(pickedColor);
            messageDisplay.textContent = 'Correct!!';
            h1.style.backgroundColor = pickedColor;
            reset.textContent = 'Play Again ?'
        } else {
        errorAudio.play();                    
        this.style.backgroundColor = '#232323';  
        messageDisplay.textContent = 'Try Again';      
        }
    });
}

reset.addEventListener("click",function(){
    btnAudio.play();    
    if(isEasyMode) {
        easyMode();
        h1.style.backgroundColor = 'steelblue';
        reset.textContent = 'New Colors' 
        messageDisplay.textContent = '';
    }else {
        hardMode();
        h1.style.backgroundColor = 'steelblue';
        reset.textContent = 'New Colors'   
        messageDisplay.textContent = '';        
    }
     
});

easyBtn.addEventListener('click',function(){
    btnAudio.play();
    isEasyMode = true;
    h1.style.backgroundColor = 'steelblue';  
    reset.textContent = 'New Colors'       
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    easyMode();
});

hardBtn.addEventListener('click',function(){
    btnAudio.play();    
    isEasyMode = false;
    h1.style.backgroundColor = 'steelblue';   
    reset.textContent = 'New Colors'       
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    hardMode();
});

function easyMode() {
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];   
        }else {
            squares[i].style.display = 'none';
        }
    }
}

function hardMode() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];   
            squares[i].style.display = 'block';
        }
    }
}

function changeColors(color) {
    for(var i=0; i < squares.length ; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i=0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}
function randomColors()  {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb("+ r + ", " + g + ", " + b +")";
}