
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
