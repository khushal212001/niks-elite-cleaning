
window.addEventListener("load",()=>{

    const preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");
    setTimeout(()=>{
        preloader.style.display = "none";
        AOS.init();
    },400)

    // animate on scroll

})

// header bg reveal 
const headerBg = ()=>{
    const header = document.querySelector(".js-header");
    
    window.addEventListener("scroll", function(){
        if(this.scrollY > 0){
            // console.log(header)/
            header.classList.add("bg-reveal");
        }
        else{
            header.classList.remove("bg-reveal");
        }
    })
}

headerBg();

// nav
const navigation = ()=>{
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const navItems = document.querySelectorAll("li");

    const navToggle = ()=>{
        nav.classList.toggle("open");
        navToggler.classList.toggle("active");
    }

    navToggler.addEventListener("click", navToggle)
    navItems.forEach((li)=>{
        li.querySelector("a").addEventListener("click", ()=>{
            if(window.innerWidth<=767){
                navToggle()
            }
        })
    })
    
}

navigation();