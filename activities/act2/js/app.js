
import  {info} from  "./info.js"
import  {image} from  "./img.js"
import {card} from "./card.js"

const myObject = {
    title: "Hello World",
    par: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veritatis temporibus voluptatum modi quam delectus, unde sunt voluptas doloremque expedita cupiditate in error recusandae esse cumque odit maiores laudantium ea?",
    button: "Contact Me",
    img: "../images/imgformal.png"
}

const myObject2 = {
    title1: "Project Completed",
    img1: "../images/project.jpg",
    par1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veritatis temporibus voluptatum modi quam delectus, unde sunt voluptas doloremque expedita cupiditate in error recusandae esse cumque odit maiores laudantium ea?",
    button1: "Learn More",
    img2: "../images/project.jpg",
    par2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veritatis temporibus voluptatum modi quam delectus, unde sunt voluptas doloremque expedita cupiditate in error recusandae esse cumque odit maiores laudantium ea?",
    button2: "Learn More",
    img3: "../images/project.jpg",
    par3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veritatis temporibus voluptatum modi quam delectus, unde sunt voluptas doloremque expedita cupiditate in error recusandae esse cumque odit maiores laudantium ea?",
    button3: "Learn More"

}

const {title, par, button, img} = myObject
const {title1, img1, par1, button1, img2, par2, button2, img3, par3, button3} = myObject2

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(info(title,par,button))
sectionOne.append(image(img))
sectionTwo.append(card(title1, img1, par1, button1, img2, par2, button2, img3, par3, button3))
