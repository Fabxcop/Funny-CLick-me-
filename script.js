const mybox = document.getElementById("box")

mybox.addEventListener("click", Event => {
    Event.target.style.backgroundColor = "Tomato";
    Event.target.textContent = "OUCH 😭"
})

mybox.addEventListener("mouseout", Event => {
    Event.target.style.backgroundColor = "lightGreen";
    Event.target.textContent = "Dont Hit Me😄 "
})

mybox.addEventListener("mouseover", Event => {
    Event.target.style.backgroundColor = "Yellow";
    Event.target.textContent = "Please Dont Hit Me😓 "
})

