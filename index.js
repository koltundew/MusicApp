window.addEventListener("load", () => {                                             
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [


    "#FA8072",
    "#800080",
    "#FF00FF",
    "#0000FF",
    "#008080",
    "#008000"
];




//sound
pads.forEach((pad,index)=>{
pad.addEventListener("click", function(){
    sounds[index].currentTime = 0;
sounds[index].play();
createBubbles(index);
});
});

//create function that makes bubbles
const createBubbles = (index) => {

    const bubble  = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener("animationed",function(){
        visual.removeChild(this);
    });
};


});
    
