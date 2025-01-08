const img1 = document.querySelector('.cat')
const img2 = document.querySelector('.container-images img:nth-child(2)')
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

gsap.to('.container-images img:nth-child(3)',{
    keyframes:[
        {duration:0.3,y:100},
        {duration:0.3,scale:1.3},
        {duration:0.3,y:200},
    ]
})

const complete = () => console.log("complete")
gsap.to('.container-images img:nth-child(3)',{
    y:100,
    repeat:1,
    onComplete:complete,
    // onStart:() => console.log('onStart'),
    // onUpdate:() => console.log('onUpdate'),
    // onRepeat:() => console.log('onRepeat')
})

gsap.registerEffect({
    name:"imgCrazy",
    effect:(targets,config) => {
        return gsap.to(targets,{duration:config.duration,y:200,scale:1.4,rotation:360})
    },
    defaults:{duration:2}
})

gsap.effects.imgCrazy(img1)

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

// gsap.registerEffect({
//     name: "imgCrazy", // 효과 이름
//     effect: (targets, config) => {
//         return gsap.to(targets, {
//             duration: config.duration, // 애니메이션 지속 시간 (config에서 전달됨)
//             y: 200, // y축으로 200px 이동
//             scale: 1.4, // 크기 1.4배 확대
//             rotation: 360 // 360도 회전
//         });
//     },
//     defaults: { duration: 2 } // 기본 지속 시간 2초
// });

// name: "imgCrazy"

// 등록된 효과의 이름입니다. 이후 이 이름으로 효과를 호출할 수 있습니다.
// effect: (targets, config) => { ... }

// targets: 애니메이션 대상 요소(예: img1).
// config: 사용자가 전달하는 설정값을 담은 객체(예: duration).
// 내부에서 **gsap.to**를 사용하여 대상 요소에 애니메이션을 적용합니다.
// defaults

// config에 값을 전달하지 않으면 기본값으로 사용됩니다.
// 여기서는 **duration**의 기본값을 2초로 설정했습니다.


// gsap.effects.imgCrazy(img1, { duration: 3 }); // 지속 시간을 3초로 설정
// gsap.effects.imgCrazy(".image-class", { duration: 4 });