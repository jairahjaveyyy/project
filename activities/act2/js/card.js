const card = (title1, img1, par1, button1, img2, par2, button2, img3, par3, button3) => {
    let div = document.createElement("div")
    div.innerHTML = `<h1 class = "projecttitle">${title1}</h1>
                    <div class = "card">
                    <div class ="p1">
                    <img class = "pic" src="./images/${img1}" alt="">
                    <p>${par1}</p>
                    <button>${button1}</button>
                    </div>
                    <div class ="p2">
                    <img class = "pic" src="./images/${img2}" alt="">
                    <p>${par2}</p>
                    <button>${button2}</button>
                    </div>
                    <div class ="p3">
                    <img class = "pic" src="./images/${img3}" alt="">
                    <p>${par3}</p>
                    <button>${button3}</button>
                    </div>
                    </div>`
    return div
}

export{card}