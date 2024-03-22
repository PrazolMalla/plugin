
// **** BLUR EFFECT ON SCROLL ****
const header = document.getElementById("header");

const navscroll = ()=>{
    if(this.scrollY>50){
        header.classList.add('blur-header');
    }
    else{
        header.classList.remove('blur-header');
    }
    
}

window.addEventListener('scroll',navscroll);

const hamMenu = document.querySelector('.nav-ham');
const navMenu = document.querySelector('.nav-menu') 
const cross = document.querySelector('.cross')

hamMenu.addEventListener('click',function(){
    navMenu.style.right="0";
    // navMenu.style.transition ="right 0.4s";
});

cross.addEventListener('click',function(){
    navMenu.style.right="-1000px";
});