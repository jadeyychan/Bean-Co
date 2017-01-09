$(document).ready(function() {

	$(function(){
		$('.message-animate').typed({
	      strings: ["Greetings? ^300\nEnquiries? ^300\nCollaborations? ^300\nLeave us a message."],
	      typeSpeed: 0
	    });
	});

	$(".message-animate").on("click", function() {
		this.remove();
		$(".typed-cursor").remove();
		$(".message-textarea").focus();
	});
});

