window.addEventListener("scroll",function(){
    if(window.scrollY>0){
        document.getElementById("nav").style.height = "90px"
    }
    else{
        document.getElementById("nav").style.height = "94px"
    }  
})


let curentViewingElement = document.getElementById("home")
document.querySelector(".ul").addEventListener("click",function(event){
    if(event.target.className == "nav"){
        curentViewingElement.classList.remove("Highlight")
        let clickedElement = document.querySelector(`#${event.target.id}`)
        clickedElement.classList.add("Highlight")
        curentViewingElement = clickedElement;
    }
})

document.querySelector(".button").addEventListener("click",function(event){
    curentViewingElement.classList.remove("Highlight")
    document.getElementById("Setup").classList.add("Highlight");
    curentViewingElement = document.getElementById("Setup");
})

document.querySelector(".gotag").addEventListener("click",function(event){
    curentViewingElement.classList.remove("Highlight")
    document.getElementById("Tags").classList.add("Highlight");
    curentViewingElement = document.getElementById("Tags");
})

window.addEventListener("DOMContentLoaded",function(){
    window.location.hash = "#lp"
})
