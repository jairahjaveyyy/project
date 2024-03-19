const image = (image) => {
    let div = document.createElement("div")
    div.className = "image"
    div.innerHTML = `<img src="./images/${image}" alt="">`
    return div
}

export {image}