$(document).ready(function(){
  $(".next").hide();
  $(".prev").hide();
  $(".left").hover(function(){
    $(".prev" ).fadeIn(250);
    },function() {
    
      $(".prev" ).fadeOut( 250 );
    }
    );

    $(".right").hover(function(){
    $(".next" ).fadeIn(250);
    },function() {
      $(".next" ).fadeOut(250);
    }
    );


  });

  $(function() {      
      $('.slider>.slider-item:first-child').addClass('active').fadeIn(1000);
      setInterval(function() {
                if($('.active').next().is('li')){
                  $('.active').removeClass('active').fadeOut(1000).next().addClass('active').fadeIn(1000);  
                } else{
                  $('.active').removeClass('active').fadeOut(1000);
                  $('.slider>.slider-item:first-child').addClass('active').fadeIn(1000);
                }},  15000);
      
  });

  $(function(){
       
      $(".next").click(function(){
               if($('.active').next().is('li')){
                $('.active').removeClass('active').fadeOut(1000).next().addClass('active').fadeIn(1000);  
                } else{
                $('.active').removeClass('active').fadeOut(1000);
                $('.slider>.slider-item:first-child').addClass('active').fadeIn(1000);
                }
                return false;
      });
      $('.prev').click(function(){
                if($('.active').prev().is('li')) {
                  $('.active').removeClass('active').fadeOut(1000).prev().addClass('active').fadeIn(1000);
                }else{
                  $('.active').removeClass('active').fadeOut(1000);
                  $('.slider>.slider-item:last').addClass('active').fadeIn(1000);
                }
                return false;
      });
      return false
  });
  

// listen to events...

  

  

  $(function(){
    $(".butcontainer").hammer().on("swiperight", function(ev){
                if($('.active').prev().is('li')) {
                  $('.active').removeClass('active').fadeOut(1000).prev().addClass('active').fadeIn(1000);
                }else{
                  $('.active').removeClass('active').fadeOut(1000);
                  $('.slider>.slider-item:last').addClass('active').fadeIn(1000);
                }
  });
  $(".butcontainer").hammer().on("swipeleft", function(ev) {

           if($('.active').next().is('li')){
          $('.active').removeClass('active').fadeOut(1000).next().addClass('active').fadeIn(1000);  
          } else{
          $('.active').removeClass('active').fadeOut(1000);
          $('.slider>.slider-item:first-child').addClass('active').fadeIn(1000);
          }

});

  
  });