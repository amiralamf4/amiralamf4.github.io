

var menu = document.querySelector('.about nav i');

var closeMenu = document.querySelector('#close i');

var tl= gsap.timeline()



tl.to(".social-media",{
   left:0,
   duration:0.7,
})
tl.from(".social-media li",{
    opacity:0,
    y: 29,
    stagger:0.2,
    duration:0.3,
})
tl.from(".close i",{
    delay:0.6,
    opacity:0,
    x:19
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
closeMenu.addEventListener("click",function(){
    tl.reverse()
})