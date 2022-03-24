gsap.registerPlugin(ScrollTrigger);

gsap.from(".animete_inicial_txt", {
    duration: 0.7,
    opacity: 0,
    y: -150,
    stagger: 0.4
})

gsap.from(".animete_inicial_img", {
    duration: 0.7,
    opacity: 0,
    x: 250,
})

gsap.from(".animate-final", {
    duration: 0.7,
    opacity: 0,
    x: 250,
})

gsap.from(".animate-final", {
   scrollTrigger: ".animate-final",
   duration : 0.8,
   opacity: 0,
   y: -200,
   stagger: 0.5,
   delay: 0.5
})