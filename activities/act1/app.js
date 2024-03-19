
import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"


const data = {
    title: "Tulip Flower",
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus quisquam in alias odio placeat adipisci, corporis ex necessitatibus eum, sequi praesentium perspiciatis est error quaerat, voluptas unde consequuntur! Qui!",
    title2: "About Tulip",
    para2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus quisquam in alias odio placeat adipisci, corporis ex necessitatibus eum, sequi praesentium perspiciatis est error quaerat, voluptas unde consequuntur! Qui!",
    button1: "Contact Us",
    button2: "About Us",
    button3: "Home",
    button4: "More",
    tulipImage: "tulip.jpg"
}

const {title, para, title2, para2, button1, button2, button3, button4, tulipImage} = data
let container = document.getElementById("container")
container.append(leftDiv(title2, para, title, para2, button1, button2, button3, button4))
container.append(rightDiv(tulipImage))