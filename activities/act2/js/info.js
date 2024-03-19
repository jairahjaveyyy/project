const info = (title, par, button) => {
    let div = document.createElement("div")
    div.className = "info"
    div.innerHTML = `<h1>${title} </h1>
                    <p>${par}</p>
                    <button class = "btn1">${button}</button>`
    return div
}

export{info}