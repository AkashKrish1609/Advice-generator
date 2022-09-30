
const heading = document.querySelector(".head")
const para = document.querySelector(".container>p")
const btn = document.querySelector(".btn")

window.onload = theData();

btn.addEventListener("click", function(){
    theData()
})

async function theData(){
    let response = await fetch("https://api.adviceslip.com/advice")
    let data = await response.json()
    heading.innerText = `ADVICE #${data.slip.id}`;
    para.innerText = `${data.slip.advice}`
}



