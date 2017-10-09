jQuery(document).ready(function($){
	/**
	** Spin Button Click Event
	**/
	$(document).on('click', "#spin-button", function(event){
		
		sendOutcomeRequest();

	});// end of event
});

function sendOutcomeRequest(){

	var $ = jQuery;
		
	if( !$('#spin-button').hasClass('spinning') ){

		// add spinning effect to the button
		$('#spin-button').addClass('spinning').css('opacity', '0.7');
		$(".machine-footer").text('');
		$("#winning-notification").text('');

		$.post('/generate-outcome', {}, function(data){

			$(".slot img").removeClass('hidden-visibilty');

			var incomingData	= $.parseJSON(data);
			console.log(incomingData)
			var slot1 			= incomingData.slot1[19];
			var slot2 			= incomingData.slot2[19];
			var slot3 			= incomingData.slot3[19];
			var bonus 			= incomingData.bonus;
			var slotsIndex 		= 0;
			var sourceString 	= 'images/Symbol_';

			var slotsInterval	= setInterval(function(){
				$("#slot1 img").attr('src', sourceString + incomingData.slot1[slotsIndex] + '.png' );
				$("#slot2 img").attr('src', sourceString + incomingData.slot2[slotsIndex] + '.png' );
				$("#slot3 img").attr('src', sourceString + incomingData.slot3[slotsIndex] + '.png' );
				slotsIndex ++;

				if( slotsIndex == 20 ){
					clearInterval(slotsInterval);
					// Retunring the button status
					$('#spin-button').removeClass('spinning').css('opacity', '1');
					// Show Messages
					if( slot1 == slot2 && slot2 == slot3){
						$("#winning-notification").html('<span style="color: #ff0043;">B</span><span style="color: #23ff00;">i</span><span style="color: #0901ec;">g</span> <span style="color: #ff04e8;">W</span><span style="color: #acb108;">i</span><span style="color: #02c6de;">n</span>');
						$("#winning-notification").fadeIn(400);
					}// end of if BIG WIN
					else if( slot1 == slot2 || slot2 == slot3 || slot1 == slot3){
						$("#winning-notification").html('<span style="color: #ff0043;">S</span><span style="color: #23ff00;">m</span><span style="color: #0901ec;">a</span> <span style="color: #ff04e8;">a</span><span style="color: #acb108;">l</span><span style="color: #02c6de;">l</span> <span style="color:#9714ca">W</span><span style="color:#53cc64">i</span><span style="color:#A00">n</span>');
						$("#winning-notification").fadeIn(400);
						if( bonus ){
							$(".machine-footer").text('Bonus Round');
							$(".machine-footer").fadeIn(400, function(){
								sendOutcomeRequest();
							});
						}
						else
							$(".machine-footer").text('No Bonus');

					}// end of SMALL WIN
					else{
						$("#winning-notification").html('<span style="#A00;">No Win</span>');
						$("#winning-notification").fadeIn(400);
						if( bonus ){
							$(".machine-footer").text('Bonus Round... It will auto-replay for you');
							$(".machine-footer").fadeIn(400, function(){
								setTimeout(function(){ sendOutcomeRequest(); },3000);
							});
						}
						else
							$(".machine-footer").text('No Bonus');
					}/*end of no WIN*/
				}/*end of last round in loop*/

			},100);

		});// end of ajax request
	}
}