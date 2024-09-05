const section = document.querySelector("section")
const body = document.querySelector("body")

let cooldown = false

let resizeObserver = new ResizeObserver(() => {
    if (window.innerWidth < window.innerHeight && !cooldown) {
        cooldown = true
        console.log("Jeg er høy!")
    } else if (window.innerWidth > window.innerHeight && cooldown) {
        cooldown = false
        console.log("Jeg ligger lavt")
    }
});
resizeObserver.observe(body);