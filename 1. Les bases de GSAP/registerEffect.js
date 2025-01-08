const img1 = document.querySelector('.cat')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const btnCat = document.querySelector('.cat-fade')


gsap.registerEffect({
    name:"imgCrazy",
    effect:(targets,config) => {
        return gsap.to(targets,{duration:config.duration,y:200,scale:1.4,rotation:360})
    },
    defaults:{duration:2}
})

gsap.effects.imgCrazy(img1)

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