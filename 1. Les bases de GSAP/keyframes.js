const img1 = document.querySelector('.cat')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const btnCat = document.querySelector('.cat-fade')




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

gsap.to('.container-images img:nth-child(3)',{
    keyframes:[
        {duration:0.3,y:100},
        {duration:0.3,scale:1.3},
        {duration:0.3,y:200},
    ]
})