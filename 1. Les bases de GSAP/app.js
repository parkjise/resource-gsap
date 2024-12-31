const img1 = document.querySelector('.cat')
const btnCat = document.querySelector('.cat-fade')


// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"power4.out"})
// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"back.out(4)"})
// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"bounce.out"})
// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"steps(12)"})
// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"power1",stagger:.5})
// gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"power1",
//     stagger:
//     function(index){
//         console.log(index)
//         return index * 0.5
//     }
//     // {
//     //     // amount:1
//     //     // each:0.5,
//     //     // from:'end'
//     // }

// })

// gsap.to('.btn',{duration:0.2,x:"random(-100,100,10)",stagger:0.1})
gsap.to('.btn',{duration:0.2,x:"random([50,30,-30,80])",stagger:0.1})

gsap.to('.container-btns button',{
    duration:.2,
    x:50,
    stagger:.2,
    ease:'power1'
})

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