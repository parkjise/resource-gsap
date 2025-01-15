const allNavLinks = document.querySelectorAll('nav a');
const imgNav = document.querySelectorAll('img');
const title =document.querySelector('h1');
const verticalLine = document.querySelector('.middle-line');
const grapesLogo = document.querySelector('.home-content img');
const homeBtn = document.querySelector('.home-content button')

window.addEventListener('load',initAnim)

function initAnim(){
  const TLFADE = gsap.timeline();
  TLFADE
  .to(title,{autoAlpha:1,y:0,delay:.2})
  .to(verticalLine,{height:200},'-=0.2')
  .to(grapesLogo,{autoAlpha:1,y:0},'-=0.2')
  .to(homeBtn,{autoAlpha:1,y:0},'-=0.2')
  .to(allNavLinks,{autoAlpha:1,y:onabort,duration:0.4,stagger:0.1},'-=0.2')
  .to(imgNav,{autoAlpha:1,y:0})
}