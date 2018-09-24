function getIt()
{$('p').on('click',function()
  {alert('Hey!')
  }
          )
}

function frameIt(){
 $('img').on('load',function(){
   $('img').addClass('tasty')
   $('tasty').css('border','2px red')
 }) 
}

function pressIt(){
  $('input').on('keydown',function(key)
{
  if(key.which==71){
    alert('You form is going to be submitted now.')
                   }
}
                ) }

function submitIt(){
  $()
}


$(document).ready(function(){

// call functions here

});
