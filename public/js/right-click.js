window.addEventListener("contextmenu",function(event){
    event.preventDefault();
    let x = event.offsetX + "px";
    let y = event.offsetY + "px";
    let contextmenu = document.querySelector("#contextmenu");
    contextmenu.style.top = y;
    contextmenu.style.left = x;
    contextmenu.classList.add("active");
});
  window.addEventListener("click",function(event){
    let contextmenu = document.querySelector("#contextmenu");
    contextmenu.classList.remove("active");
});