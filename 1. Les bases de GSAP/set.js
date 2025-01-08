const img1 = document.querySelector('.cat')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const btnCat = document.querySelector('.cat-fade')

const allImgs = document.querySelectorAll('.container-images img');
console.log(allImgs);
gsap.set(allImgs,{opacity:0.5})

const anim = gsap.to(img2,{y:250,yoyo:true,repeat:1})
anim.duration(.4)
// anim.delay(1)
// anim.pause()
// anim.seek(2.5)
// anim.resume()
console.log(img2)

setTimeout(() => {
    anim.restart()
},3000)