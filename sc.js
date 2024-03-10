var pointer=document.querySelector(".po");
pointer.innerHTML="15 sec";
gsap.from(".po",{
    delay:15,
})


var video = document.querySelector("#hero");
var oo=setInterval(n,10);
function n(){
  pointer.innerHTML=(video.duration-video.currentTime).toFixed(1)+" sec";
  if(video.duration==video.currentTime){
    pointer.innerHTML="";
    video.muted = true;
    clearInterval(oo);
  }
}

//
gsap.to(".content",{
    opacity:1,
    delay:14,
})
////
gsap.to("video",{
    opacity:0.3,
    delay:15,
    
})
//////////
window.addEventListener("mousemove",function (e) {
var pointer=document.querySelector(".po");
var x=e.pageX- pointer.offsetWidth / 2;
var y=e.pageY- pointer.offsetHeight / 2;
gsap.to(".po",{
top:y,
left:x,
})
})
////////
document.querySelector(".content").addEventListener("mouseover",function () {
    gsap.to(".po",{
        delay:0,
        scale:3,
    })
    gsap.to(".po",{
        delay:2,
        duration:1,
        scale:1,
    })
})
document.querySelector(".jj").addEventListener("mouseover",function () {
    gsap.to(".po",{
        delay:0,
        scale:4,
    })
    gsap.to(".po",{
        delay:2,
        duration:1,
        scale:1,
    })
})
//

gsap.from(".outerabout",{
    width:0,
    scrollTrigger:{
        trigger: ".abme",
        markers:true,
        scrub:1,
        end:"bottom 30%",
        start:"60% 50%",
    }
})