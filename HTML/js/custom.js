// JavaScript Document

//Options Panel
 $(function() {
	 $('#options_button').click(function() {
                $('#options').slideToggle('fast');
				var width=$(this).css('left')
				if (width=='-2px')
					$(this).css('left', '153px');
				else $(this).css('left', '-2px');
            });
	
	  $('#texture_options img').click(function () {
                   var source='url('+$(this).attr('src')+')';
				     $('body').css('background-image',source);                
                });
				
	$('.color').click(function(){
		var color=$(this).css('background-color');
		$('.color_text').css('color', color);
		$('.color_button').css('background-color', color);
	});
	
});


//countdown

$(function () {
	var countDay = new Date();
	countDay = new Date('December 25, 2012 00:01:00');
	$('#defaultCountdown').countdown({until: countDay, 
	format: 'DHMS',
	layout: '<div id="counter">'+
							'<div id="values">'+
								'<div id="counter_days" class="grey numbs rounded shadow">{dnnn}<p class="date_label">{dl}</p></div>'+
								'<div id="counter_hours" class="grey numbs rounded shadow">{hnn}<p class="date_label">{hl}</p></div>'+
								'<div id="counter_minutes" class="grey numbs rounded shadow">{mnn}<p class="date_label">{ml}</p></div>'+
								'<div id="counter_seconds" class="grey numbs rounded shadow">{snn}<p class="date_label">{sl}</p></div>'+
							'</div>'+
						'</div>'});
	$('#year').text(countDay.getFullYear());
});


// Subscribe form
function SubscribeForm(){
	$('#signupform').submit(function(){
		$('.email').removeClass('error')
		$('em.error').remove();
		
		var error = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					
		if( $.trim($('.email').val()) == '' ) {
				$(this).append('<em class="error">Please enter your email address.</em>');
				$(this).addClass('error');
				error = true;
			} else if(!emailReg.test(jQuery.trim($('.email').val()))) {
					$(this).append('<em class="error">Please enter a valid email address</em>');
					$(this).addClass('error');
					error = true;
				}						
		if(!error){
			$("#submit", this).after('<span id="form_loading"></span>');
			var formValues = $(this).serialize();
			
			$.post($(this).attr('action'), formValues, function(data){
				$("#signupform").before(data);				
			});
			
			$(':input[type="text"]').attr('value', '');
		}
		return false
	});	
}


