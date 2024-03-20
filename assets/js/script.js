const header = document.getElementById("header")

const navscroll = ()=>{
    if(this.scrollY>50){
        header.classList.add('blur-header')
    }
    else{
        header.classList.remove('blur-header')
    }
    
}

window.addEventListener('scroll',navscroll)