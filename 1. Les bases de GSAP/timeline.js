const img1 = document.querySelector('.container-images img:nth-child(1)')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const img3 = document.querySelector('.container-images img:nth-child(3)')


const title = document.querySelector('.title')
const txt = document.querySelector('.txt')

const TL = gsap.timeline({
    defaults:{
        duration:1,
        ease:"elastic"
    },
    repeat:-1,
    repeatDelay:0.5,
    yoyo:true,
    paused:true// 멈춤
    // onComplete:() => console.log("Complete"),
    // onStart:() => console.log("Start")
});

// TL
// .to(img1,{autoAlpha:1, y:0,duration:1})
// .to(img2,{autoAlpha:1, y:0,duration:1})
// .to(img3,{autoAlpha:1, y:0,duration:1},1)
// .to(title,{autoAlpha:1, y:0,duration:1})
// .to(txt,{autoAlpha:1, y:0,duration:1})

// TL
// .to(img1,{autoAlpha:1, y:0,duration:1})
// .to(img2,{autoAlpha:1, y:0,duration:1},'>')
// .to(img3,{autoAlpha:1, y:0,duration:1},'<')
// .to(title,{autoAlpha:1, y:0,duration:1})
// .to(txt,{autoAlpha:1, y:0,duration:1})


TL
.to(img1,{autoAlpha:1, y:0})
.to(img2,{autoAlpha:1, y:0,ease:"power4"},'-=0.75')
.to(img3,{autoAlpha:1, y:0},'-=0.75')
.to(title,{autoAlpha:1, y:0},'-=0.75')
// .addLabel('endAnim')
.add(() => {
    console.log('Fin de timeline')
})
.to(txt,{autoAlpha:1, y:0},'-=0.75')

setTimeout(() => {
    TL.seek('endAnim')
    // TL.seek(1)
    TL.play()
},3000)