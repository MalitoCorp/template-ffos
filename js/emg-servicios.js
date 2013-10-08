// cuando la secciòn de servicios se carga...
$('#emg-servicios').on('pageshow',function(e,data){

  $('#servicios-content').css('margin-top',
  	                      ($(window).height() 
  	                      	- $('[data-role=header]').height() 
  	                      	- $('[data-role=footer]').height() 
  	                      	- $('#servicios-content').outerHeight())/2);
  return;
});

