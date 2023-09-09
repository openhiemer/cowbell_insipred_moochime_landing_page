function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();

 const cursor = document.getElementById('cursor');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate(${x}px,${y}px)`; 
        });

  
var t1=gsap.timeline({
    scrollTrigger: {
        trigger: "#page-1 h1",
        scrub: 4,
        scroller: "#main",
        start: "top 30%",
        end: "top 3%",
        
        
      }
})
t1.to("#page-1 h1", {
    x: -130,
   
  },"anime")

t1.to("#page-1 h2",{
    x:130,


},"anime")  

t1.to("#page-1 video",{
    width:"90%"
},"anime")


var t2= gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#main",
    start:"top -127%",
    end: "top -150%",
    scrub:5


  }
})

t2.to("#main",{
    backgroundColor:"#fff",
},"anime3")

t2.to("#page-2",{
  opacity:"1",
},"anime3")

t2.to("#page-2 h2",{
  opacity:"1",

},"anime3")

var t3 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main", 
    trigger: "#main",
    start: "top -370%",
    end: "top -393%", 
    scrub: 0.5, 
  },
});

t3.to("#main", {
  backgroundColor: "#fff",
},"anime2");

t3.to(".elem h2",{
  opacity:"1",
},"anime2")
  

var t4=gsap.timeline({
  ScrollTrigger:{
    scroller:"#main",
    trigger:"#main",
    start:"top -358%",
    end:"top -400%",
    scrub:5

  }
})

t4.to("#page-5",{
  backgroundColor:"#0A2D54",
  opacity:'1'
})









