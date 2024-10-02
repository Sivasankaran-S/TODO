//select popupbox,overlay,+button
var overlay = document.querySelector(".overlay");
var popbox = document.querySelector(".popbox");
var addbtn = document.getElementById("add-popup-button")

addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popbox.style.display="block"
})

//select cancel btn in this function prevent default caancel function.
var cancelpop = document.getElementById("cancel-book")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popbox.style.display="none"
})

//select container,addbtn,book-title,book-author,book-des
var container = document.querySelector(".container")
var addbookbtn = document.getElementById("add-book")
var booktitle = document.getElementById("book-input")
var bookauthor = document.getElementById("book-author")
var bookdes = document.getElementById("book-des")

addbookbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdes.value}</p>
    <button onclick="deletebookbtn(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popbox.style.display="none"
})

function deletebookbtn(event){   //alternate closest element find and remove
    event.target.parentElement.remove()
}