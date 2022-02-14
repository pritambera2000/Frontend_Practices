let t1 = gsap.timeline();
t1.from('.bg',{scale:0.1,opacity:0.5,duration:3,ease: Expo.easeOut,delay:0.2})
  .to('.text-animation', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3, duration: 1}, "-=2.9")
  .to('.text-animation', { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', y: -200, duration: .2, delay: .5})
  .to('.text-animation', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: .3, duration: .3, delay: .5})
  .to('svg',{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y:0})
  .to('.grid-3',{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y:0,stagger:.3,opacity:1,duration:1}, "-=1.4" )
