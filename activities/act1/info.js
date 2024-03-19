const leftDiv = (title, para, title2, para2, button1, button2, button3, button4) => {

    let div = document.createElement("div")
    div.className = "left"
    div.innerHTML = `<h1>${title}</h1>
                     <p>${para}</p>
                     <h1>${title2}</h1>
                     <p>${para2}</p>
                     <div class="btns">
                     <button>${button1}</button>
                     <button>${button2}</button>
                     <button>${button3}</button>
                     <button>${button4}</button>
                     </div>
    `
    return div
}

export {leftDiv}