var divs = document.querySelectorAll(".imageDiv");
var num = 0;
function getImage() {
    if (num===divs.length){
        num=0;
    }
    divs[num].setAttribute("class", "appear imageDiv");
    var max = divs.length - 1;
    var previousNode = "";
    if (num === 0) {//当这个等于0，最大下标是max
        previousNode = divs[max];
    } else {
        previousNode = divs[num - 1];
    }
    previousNode.setAttribute("class", "disappear imageDiv");
    num++;
}
setInterval(function(){
    getImage();
},1000);