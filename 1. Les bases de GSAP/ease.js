const img1 = document.querySelector('.cat')
const img2 = document.querySelector('.container-images img:nth-child(2)')
const btnCat = document.querySelector('.cat-fade')


gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"power4.out"})
gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"back.out(4)"})
gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"bounce.out"})
gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"steps(12)"})
gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"power1",stagger:.5})
gsap.to('.container-images img',{x:100,y:300,scale:1.2,duration:2,ease:"power1",
    stagger:
    function(index){
        console.log(index)
        return index * 0.5
    }
    // {
    //     // amount:1
    //     // each:0.5,
    //     // from:'end'
    // }

})

