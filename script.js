let home = document.querySelector("#home")
let about = document.querySelector("#about")
let info = document.querySelector("#info")

let homecontent = document.querySelector("#homecontent")
let aboutcontent = document.querySelector("#aboutcontent")
let infocontent = document.querySelector("#infocontent")


home.addEventListener("click",function(){
    homecontent.style.display = "block"
    aboutcontent.style.display="none"
    infocontent.style.display="none"
    

})

about.addEventListener("click",function(){
    homecontent.style.display = "none"
    infocontent.style.display="none"
    aboutcontent.style.display="block"
    
})
info.addEventListener("click",function(){
    homecontent.style.display = "none"
    aboutcontent.style.display="none"
    infocontent.style.display="block"

})