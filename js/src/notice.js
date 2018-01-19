var noticecontent = document.getElementById('noticecontent');
var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var speed = 50;

list2.innerHTML = list1.innerHTML;
function scrollUp(){
  if(noticecontent.scrollTop >= list1.scrollHeight) {
    noticecontent.scrollTop = 0;
  }else{
    noticecontent.scrollTop ++;
  }
}
var textScroll = setInterval("scrollUp()",speed);
noticecontent.onmouseover = function(){
  clearInterval(textScroll);
}
noticecontent.onmouseout = function(){
    textScroll = setInterval("scrollUp()",speed);
  };
