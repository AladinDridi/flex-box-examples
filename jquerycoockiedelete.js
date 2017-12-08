 jQuery( document ).ready( function(){
    //Your codes strat from here
    if ($.cookie('notice') == 'bouttonfermer') {
    $('#applimsg').hide();
     
  } else {
     $('#applimsg').show();
     
  }
    // Show or hide on load depending on cookie 
 
  $('#fermerboutton').click(function(e) {
   
    $.cookie('notice','bouttonfermer');
    
  });
  $('#element2').click(function(e){
      $.cookie('notice','bouttonfermer');
  });
});
