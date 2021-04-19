let imageRight = document.querySelectorAll('.to-animate-right')
let imageLeft = document.querySelectorAll('.to-animate-left')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-right')
        } else {
            entry.target.classList.remove('animate-in-right')
        }
    })
},
{
    rootMargin: '200px'
})

const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-left')
        } else {
            entry.target.classList.remove('animate-in-left')
        }
    })
},
{
    rootMargin: "200px"
})

imageRight.forEach(img => {
    observer.observe(img)
})

imageLeft.forEach(img => {
    leftObserver.observe(img)
})