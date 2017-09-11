var outer=document.getElementsByClassName("lunbotu")[0];
var center=document.getElementsByClassName("lunbotu_moveImg")[0];
var right=document.getElementsByClassName("right")[0];
var left=document.getElementsByClassName("left")[0];
var dian1=document.getElementsByClassName("a1")[0];
var dian2=document.getElementsByClassName("a2")[0];
var dian3=document.getElementsByClassName("a3")[0];
var dian=document.getElementsByClassName("a0");
var num=0;

function lunLeft(){
    for(var i=0;i<dian.length;i++){
        dian[i].style.background="gray";
    }
    num++;
    if(num >= dian.length){
        num=0;
    }
    dian[num].style.background="#F40";



    var left=center.style.left;
    left=left.substring(left.length-2,-1);
    if(left==-5760){
        center.style.transition="";
        center.style.left="-0px";
        setTimeout(function () {
            center.style.transition="all 2s";
            center.style.left="-1920px";
        },50)
    }else{

        center.style.left=left-1920+"px";
    }



}


function lunRight(){

    for(var i=0;i<dian.length;i++){
        dian[i].style.background="gray";
    }
    if(num >= dian.length){
        num=0;
    }
    dian[num].style.background="#F40";
    num--;

    var left=center.style.left;
    left=left.substring(left.length-2,-1);

    if(left==0){
        center.style.transition="";
        center.style.left="-5760px";
        setTimeout(function () {
            center.style.transition="all 2s";
            center.style.left="-3840px";
        },50)
    }else{

        var left1=center.style.left=left - -1920+"px";
    }

    console.log(left1);
}

right.onclick=lunRight;
left.onclick=lunLeft;
var b=setInterval(lunLeft,2000);

outer.onmouseenter=function () {
    clearInterval(b);

}
outer.onmouseleave=function () {
    b=setInterval(lunLeft,2000);

}


dian1.onclick=function () {
    for(var i=0;i<dian.length;i++){
        dian[i].style.background="gray";
    }
    dian1.style.background="#F40";
    center.style.left= "0px";

}
dian2.onclick=function () {
    for(var i=0;i<dian.length;i++){
        dian[i].style.background="gray";
    }
    dian2.style.background="#F40";
    center.style.left= "-1920px";

}
dian3.onclick=function () {
    for(var i=0;i<dian.length;i++){
        dian[i].style.background="gray";
    }
    dian3.style.background="#F40";
    center.style.left= "-3840px";

}
var floorDiv=document.getElementsByClassName("floor")[0];
var flooraDiv=document.getElementsByClassName("floora");
console.log(flooraDiv);
document.addEventListener("mousewheel",function () {
    if(document.body.scrollTop>860){
        floorDiv.style.opacity="1";
    }
    else{
        floorDiv.style.opacity="0";
    }
    console.log(document.body.scrollTop);

    flooraDiv[0].onclick=function () {
        document.body.scrollTop=670;
        console.log("我点了1");
    }
    flooraDiv[1].onclick=function () {
        document.body.scrollTop=1312;
        console.log("我点了2");
    }
    flooraDiv[2].onclick=function () {
        document.body.scrollTop=1913;
        console.log("我点了3");
    }
    flooraDiv[3].onclick=function () {
        document.body.scrollTop=2595;
        console.log("我点了4");
    }
    flooraDiv[4].onclick=function () {
        document.body.scrollTop=3391;
        console.log("我点了5");
    }
    flooraDiv[5].onclick=function () {
        document.body.scrollTop=0;
        console.log("我点了6");
    }


});









