const img1 = document.querySelector('.cat')
const btnCat = document.querySelector('.cat-fade')


// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"power4.out"})
// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"back.out(4)"})
// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"bounce.out"})
gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"steps(12)"})

btnCat.addEventListener('click',() => {
    gsap.to(img1,{
        x:100,
        y:100,
        scale:2,
        duration:2,
        delay:.2,
        repeat:2,
        repeatDelay:2})
})