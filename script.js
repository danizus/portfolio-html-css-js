const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

const mouseFollower = ()=>{
    window.addEventListener("mousemove",(dets)=>{
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`

    })
}



const firstPageAnimation=()=>{
    tl = gsap.timeline()
    tl.from(
        "#nav",
        {
            y:"-10",
            opacity:0,
            duration:1.5,
            ease:Expo.easeInOut


        }

    )
  .to(".bounding-elem",{
        y:"0",
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2,
        delay:-1

    }).from("#herofooter",{
        y:"-10",
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        delay:-1
    })
}
mouseFollower()
firstPageAnimation()