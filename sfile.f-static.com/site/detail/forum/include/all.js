//Open the content of the message
function OpenMessageContent(message_id,forum_id,depart_id) {
	//Open the content
	if ($('#me_'+message_id+'').is(":visible"))
		$('#me_'+message_id+'').hide();
	else
		$('#me_'+message_id+'').show();
	//Render the facebook button
	if ($('.facebook_like_'+message_id+'_show').length == 0) {
		$('#facebook_like_'+message_id+'').html('<div class="fb-like facebook_like_'+message_id+'_show" data-href="http://'+ domainTXT +'/site/detail/forum/showMsg.asp?forum_id='+ forum_id +'&message_id='+ message_id +'&amp;depart_id='+ depart_id +'" data-send="false" data-layout="button_count" data-width="200" data-show-faces="false"></div>');

	    try{
		    FB.XFBML.parse(document.getElementById('facebook_like_'+message_id+'')); 
	    }catch(ex){}
	}
}