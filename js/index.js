
//footer
const body = document.querySelector("body")
const createdFooter = document.createElement("footer")
//footer.textContent = "Copyright © 2026"
body.appendChild(createdFooter)

//date + year
const today = new Date()
const thisYear = today.getFullYear()

let footer = document.querySelector("footer")
const copyright = document.createElement("p")
copyright.innerHTML = `&copy; Tina ${thisYear}`
footer.appendChild(copyright)

//skills
let skills = ["JavaScript", "HTML", "CSS", "Github"]
let skillsList = document.querySelector("#Skills ul")
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li")
    skill.textContent = skills[i]
    skillsList.appendChild(skill)
}

//message form
let messageForm = document.forms["leave_message"]

messageForm.addEventListener("submit", function(event) {
    event.preventDefault()

    let usersName = event.target.usersName.value
    let usersEmail = event.target.usersEmail.value
    let usersMessage = event.target.usersMessage.value

    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    let messageSection = document.getElementById("messages")
    let messageList = messageSection.querySelector("ul")
    let newMessage = document.createElement("li")

    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`
    let removeButton = document.createElement("button")
    removeButton.innerText = "remove"
    removeButton.type = "button"

    removeButton.addEventListener("click", function(event) {
        let entry = event.target.parentNode
        entry.remove()
    })
    
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)

    event.target.reset()
})