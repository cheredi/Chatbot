function getElementLeft(elm){
    var x=0;
//set x to elm's offsetLeft
    x=elm.offsetLeft;
    //set elm to its offsetParent
    elm=elm.offsetParent;
    //use while loop to check if elm is null
    //if not then add current elm's offsetLeft to x
    //offsetTop to y and set elm to its offsetParent
    while(elm!=null){
        x=parseInt(x) + parseInt(elm.offsetLeft);
        elm=elm.offsetParent;
    }
    return x;

}
function getElemtTop(elm){
    var y=0;
    //set x to elm's offsetLeft
    y=elm.offsetTop;
    //set elm to its offsetParent
    elm=elm.offsetParent;
    //use while loop to check if elm is null
    //if not then add current elm's offsetLeft to x
    //offsetTop to y and set to its offsetParent
    while(elm !=null){
        y=parseInt(y) + parseInt(elm.offsetTop);
        elm.offsetParent;
    }
    return y;
}

function Large(obj){
    var imgbox=document.getElementsByClassName(".g1");
    imgbox.style.visibility='visible';
    if(imgbox.addEventListener){
        imgbox.addEventListener('mouseout',Out,false);
    }else{
        imgbox.attachEvent('omouseout',Out);
    }
    imgbox.innerHtml='';
    imgbox.appendChild(img);
    imgbox.style.left=(getElement(obj)-50) + 'px';
    imgbox.style.top=(getElement(obj)-50) + 'px';
}
function Out(){
    document.getElementsByClassName(".g1").style.visibility='hiddem';
}