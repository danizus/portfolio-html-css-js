// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });

const mouseFollower = (scaleX,scaleY)=>{
    window.addEventListener("mousemove",(dets)=>{
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${scaleX},${scaleY})`

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


const mouseDeform=()=>{
    let prevX = 0;
    let prevY = 0;
    window.addEventListener("mousemove",(dets)=>{
     const  mouseX = dets.clientX - prevX;
      const mouseY =  dets.clientY - prevY;
      prevX = dets.clientX;
      prevY = dets.clientY;
     const scaleX =  gsap.utils.clamp(0.8,1.2,mouseX);
     const scaleY = gsap.utils.clamp(0.8,1.2,mouseY);

      mouseFollower(scaleX,scaleY);
     
    })
}
mouseFollower()
firstPageAnimation()
mouseDeform()