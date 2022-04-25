

const numbercontainer = document.getElementById("number");
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

numbercontainer.innerHTML = 30;
btn.addEventListener("click", ()=>{
    setInterval(()=>{
        numbercontainer.innerHTML-=1;
        if(numbercontainer.innerHTML < 0){
            numbercontainer.innerHTML = 0;
        }
            // if(numbercontainer.innerHTML % 2 == 0){
            //     content.style.backgroundColor = "pink";
            // }else{
            //     content.style.backgroundColor = "blueviolet";
            // }
    }, 1000)
});