const rightDiv = (image) => {
    let div = document.createElement("div")
    div.className = "right"
    div.innerHTML = `<a href="https://www.facebook.com/"><img src ="${image}" alt =""></a>
    `
    return div
}

export {rightDiv}