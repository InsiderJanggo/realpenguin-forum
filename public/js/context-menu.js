window.addEventListener("contextmenu",function(event){
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
    var copyElement = document.getElementById("copy-text");
    var refreshElement = document.getElementsByClassName("fa fa-refresh");
    /*refreshElement.addEventListener("click", function() {
        location.reload();
    })*/
    refreshElement.onclick = function() {
        location.reload();
    }
});
window.addEventListener("click",function(){
    document.getElementById("context-menu").classList.remove("active");
});