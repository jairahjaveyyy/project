
import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"


const data = {
    title: "Tulip Flower",
    para: "Tulips are spring-blooming perennial herbaceous bulbiferous geophytes in the Tulipa genus. Their flowers are usually large, showy, and brightly coloured, generally red, orange, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally.",
    title2: "About Tulip",
    para2: "The name tulip is thought to be derived from a Persian word for turban, which it may have been thought to resemble by those who discovered it.",
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