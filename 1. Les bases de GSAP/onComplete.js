const img1 = document.querySelector('.cat')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const btnCat = document.querySelector('.cat-fade')



const complete = () => console.log("complete")
gsap.to('.container-images img:nth-child(3)',{
    y:100,
    repeat:1,
    onComplete:complete,
    // onStart:() => console.log('onStart'),
    // onUpdate:() => console.log('onUpdate'),
    // onRepeat:() => console.log('onRepeat')
})