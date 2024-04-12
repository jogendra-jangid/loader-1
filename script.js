var tl = gsap.timeline()
tl.from(".line h1",{
    y: 150,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.5
})

tl.from("#line1-part1, .line h2",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5");
var grow = 0;

setInterval(function(){
    if(grow<100){
        grow++
        h5timer.innerHTML = grow++
    }

    else{
        grow = 100
        h5timer.innerHTML = grow
    }
}, 35)
    }
})
tl.to("#loader",{
    opacity: 0,
    duration: 0.5,
    delay:2.5,

})

tl.from('#page1',{
    y: 1200,
    opacity:0,
    delay:0.2,
    duration:0.5
})