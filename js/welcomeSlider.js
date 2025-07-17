const sliderArr = [
  "../assets/img/welcome-slider/1.jpg",
  "../assets/img/welcome-slider/2.jpg",
  "../assets/img/welcome-slider/3.jpg",
  "../assets/img/welcome-slider/4.jpg",
  "../assets/img/welcome-slider/5.jpg",
]

const welcomeBg = document.getElementById("welcomeBg")
console.log(welcomeBg)
const slider = document.getElementById("slider")
const buttonsContainer = slider.querySelector(".btn-switchers")
const prevButton = buttonsContainer.querySelector(".btnPrev")
const nextButton = buttonsContainer.querySelector(".btnCurr")
const picPrev = slider.querySelector(".picPrev")
const picCurr = slider.querySelector(".picCurr")
const icons__nav = slider.getElementsByClassName("square")

let index = 0

window.addEventListener("DOMContentLoaded", function () {
  welcomeBg.style.backgroundImage = `url(${sliderArr[0]})`
  icons__nav[0].classList.add("active")
})

nextButton.addEventListener("click", function () {
  index += 1
  if (index > sliderArr.length - 1) {
    index = 0
  }
  // icons__nav[index].classList.add("active")
  // if (index - 1 > 0) {
  //   icons__nav[index - 1].classList.remove("active")
  // }
  // if (index == 1) {
  //   icons__nav[0].classList.remove("active")
  // }
  // if (index == 0) {
  //   icons__nav[sliderArr.length - 1].classList.remove("active")
  // }
   Array.from(icons__nav).forEach((el, i) => {
     if (i == index) {
       el.classList.add("active")
     } else {
       el.classList.remove("active")
     }
   })
  welcomeBg.style.backgroundImage = `url(${sliderArr[index]})`
  picPrev.textContent = index + 1
})

prevButton.addEventListener("click", function () {
  index -= 1
  if (index < 0) {
    index = sliderArr.length - 1
  }
  welcomeBg.style.backgroundImage = `url(${sliderArr[index]})`
  picPrev.textContent = index + 1
  Array.from(icons__nav).forEach((el,i) => {
    if (i == index) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  });
})

Array.from(icons__nav).forEach((el,i)=>{
  el.addEventListener('click',function(){
    welcomeBg.style.backgroundImage = `url(${sliderArr[i]})`
    el.classList.add("active")
    Array.from(icons__nav).forEach((other, otherIndex)=>{
      if (otherIndex != i) {
        other.classList.remove('active')
      }
    })
  })
})
