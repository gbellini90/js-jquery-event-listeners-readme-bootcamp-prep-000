function getIt()
{$('p').on('click',function
()
  {
  alert('Hey!')
  }
)
}

function frameIt(){
 $('img').on('load',function(){
   $.addClass('tasty')
   $('tasty').css('border','red')
 }) 
  
}






$(document).ready(function(){

// call functions here

});
