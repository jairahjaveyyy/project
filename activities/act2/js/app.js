
import  {info} from  "./info.js"
import  {image} from  "./img.js"
import {card} from "./card.js"

const myObject = {
    title: "&#10171; Hello World &#10171;",
    par: "Hi, I am Jairah Jave Saluta Gallegos, a 20 years old from Medina Misamis Oriental. I am a second year student currently studying in Gingoog City Colleges taking up BS Information Techhnology.",
    button: "Contact Me",
    img: "../images/imgformal.jpg"
}

const myObject2 = {
    title1: "&#9884; Project Completed &#9884;",
    img1: "../images/project1.jpg",
    par1: "The Arduino Clap Switch is a project that enables users to control electrical appliances by clapping. It utilizes sound detection to trigger a response, making it a fun and practical application of Arduino technology.",
    button1: "Learn More",
    img2: "../images/project2.jpg",
    par2: "INNOGRAPHX is a dynamic graphic design business that we created dedicated to providing innovative and creative solutions to meet the visual communication needs of individuals and businesses. This project was created for our final output in our subject Technopreneurship.",
    button2: "Learn More",
    img3: "../images/project3.png",
    par3: "The Automatic Alcohol Dispenser project is designed to provide a hands-free solution for dispensing alcohol-based sanitizers in public spaces, workplaces, and homes.  This project was created for the completion of our subject in Electronics. We used electronic devices in crafting the said project.",
    button3: "Learn More"

}

const {title, par, button, img} = myObject
const {title1, img1, par1, button1, img2, par2, button2, img3, par3, button3} = myObject2

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(info(title,par,button))
sectionOne.append(image(img))
sectionTwo.append(card(title1, img1, par1, button1, img2, par2, button2, img3, par3, button3))
