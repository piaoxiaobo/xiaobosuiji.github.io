window.onload=mobileMenu();
function mobileMenu(){
  var mobilenav = document.getElementById('mobilenav');


  mobilenav.addEventListener('touchstart',function(event){

    if(mobilenav.style.display = 'none'){

      mobilenav.style.display = 'block';
    }else if(mobilenav.style.display = 'block'){
      mobilenav.style.display = 'none';
    }

    event.stopPropagation();
  });
  document.addEventListener('touchstart',function(){
    if(mobilenav.style.display = 'block'){

      mobilenav.style.display = 'none';
    }
  });
  mobilenav.addEventListener('touchstart',function(event){

    event.stopPropagation();
  });
}
