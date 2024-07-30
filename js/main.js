//Add new book to list
const addBttn = document.getElementById("add-book")
const ul = document.getElementById("list")

addBttn.addEventListener("click", function(){
    const title = document.getElementById("title").value
    
    const li = document.createElement("li")
    li.classList.add("list-item")
    ul.appendChild(li)

    const input = document.createElement("input")
    input.type = 'checkbox'

    const label = document.createElement("label")
    label.htmlFor = "book"
    label.innerText = title

    const removeBttn = document.createElement("button")
    removeBttn.id = "remove"
    removeBttn.innerText = "Remove"

    li.appendChild(input)
    li.appendChild(label)
    label.appendChild(removeBttn)

    //Remove books from list
    removeBttn.addEventListener("click", function(){
        ul.removeChild(li)
    })
})

