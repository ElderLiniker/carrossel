const next = document.getElementById("next")
const prev = document.getElementById("prev")

let list =document.querySelectorAll(".item")

let count = list.length
let active = 0

next.onclick=()=>{
let activeold = document.querySelector(".active")
activeold.classList.remove("active")

active = active>= count -1 ? 0: active + 1

list[active].classList.add("active")

}
prev.onclick= ()=>{
    let activeold = document.querySelector(".active")

activeold.classList.remove("active")

active = active<= 0 ? count-1: active - 1

list[active].classList.add("active")

    
}
