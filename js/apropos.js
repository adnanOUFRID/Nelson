gsap.registerPlugin(ScrollTrigger)
const text_left = document.querySelectorAll(".text_left")
const text_right = document.querySelectorAll(".text_right")
const images = document.querySelectorAll("img")
for (let i = 0; i < text_left.length; i++) {
    gsap.fromTo(text_left[i], { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: text_left[i], start: 'top center' } })
}
for (let i = 0; i < text_right.length; i++) {
    gsap.fromTo(text_right[i], { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: text_right[i], start: 'top center' } })
}
for (let i = 0; i < images.length; i++) {
    gsap.fromTo(images[i], { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, scrollTrigger: { trigger: images[i], start: 'top center' } })
}
gsap.fromTo(".map", { opacity: 0 }, { opacity: 1, duration: 0.5, scrollTrigger: { trigger: ".map", start: 'top center' } })