function mg(){

  let divWidth = $('#box01>section>div').width();
  console.log(divWidth);

  $('#box01 ul>li:last').prependTo('#box01 ul');

  $('#box01 ul').css('margin-left','-'+divWidth+'px');

  $('#box01 .prev').on('click',function(e){
    $('body').css('background','red');
    $('#box01 ul').animate({marginLeft:'+='+divWidth+'px'},1000,'swing',function(){
      $('#box01 ul>li:last').prependTo('#box01 ul');
      $('#box01 ul').css('margin-left','-'+divWidth+'px');

    });

  });


  $('#box01 .next').on('click',function(e){
    $('#box01 ul').animate({marginLeft:'-='+divWidth+'px'},1000,'swing',function(){
      $('#box01 ul>li:first').appendTo('#box01 ul');
      $('#box01 ul').css('margin-left','-'+divWidth+'px');

    });

  });



}