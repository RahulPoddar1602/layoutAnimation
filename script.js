gsap.registerPlugin(Flip);
const links = document.querySelectorAll(".nav-items a")
const activeNav = document.createElement("div");
activeNav.classList.add("active-nav");
links.forEach(link => {
    link.addEventListener('click',()=>{
        gsap.to(links, {color:"#252525"});
        //Turn navs blue
        if(document.activeElement===link){
            gsap.to(link , {color:"#385ae0"})
        }

        //move line
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state,{
            duration:1,
            absolute:true,
            ease:"elastic.out(1,0.5)"
        })
    })
})

const cards = document.querySelectorAll(".card");
cards.forEach((card,index) => {
    card.addEventListener('click',()=>{
        const state = Flip.getState(cards);
        const isCardActive = card.classList.contains("acitve");
        cards.forEach((otherCard,otherIdx)=>{
            otherCard.classList.remove("active")
            otherCard.classList.remove("is-inactive");
            if(!isCardActive && index!==otherIdx)
            otherCard.classList.add("is-inactive");
        })  
        if(!isCardActive){card.classList.add("active");}
        Flip.from(state,{
            duration:1,
            absolute:true,
            // ease:"elastic.out(1,0.5)"
            ease:"expo.out",
            // onComplete:()=>{
            //     gsap.to(".card p",{color:"red",duration:4})
            // }
        })
    })
})