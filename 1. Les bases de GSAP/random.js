const img1 = document.querySelector('.cat')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const btnCat = document.querySelector('.cat-fade')



// gsap.to('.btn',{duration:0.2,x:"random(-100,100,10)",stagger:0.1})
gsap.to('.btn',{duration:0.2,x:"random([50,30,-30,80])",stagger:0.1})