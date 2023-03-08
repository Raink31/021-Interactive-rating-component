const submitBtn = document.querySelector("#submit")
const giveNoteEl = document.querySelector(".give-note")
const thanksEl = document.querySelector(".thanks")
let givenNoteEl = document.querySelector("#given-note")
const radioButtons = [
    document.querySelector("#rate-1"),
    document.querySelector("#rate-2"),
    document.querySelector("#rate-3"),
    document.querySelector("#rate-4"),
    document.querySelector("#rate-5")
]

submitBtn.addEventListener("click", function() {
    for (i = 0 ; i < radioButtons.length ; ++i) { 
        if (radioButtons[i].checked) {
            giveNoteEl.style.display = "none"
            thanksEl.style.display = "flex"
            const checkedValue = radioButtons[i]
            givenNoteEl.textContent = `
            You selected ${checkedValue.value} out of 5
            `
        }
    }
})