const colors =['green', 'red', 'purple', 'rgba(133,112,200)','#f1f5'];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {

    const randomNumber = getRandomNumber();

    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    const color = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
};