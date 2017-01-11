$(document).ready(function() {

	/* Typing animation */
	$('.message-animate').typed({
		strings: ["Greetings? ^300\nEnquiries? ^300\nCollaborations? ^300\nLeave us a message."],
      	typeSpeed: 3
    });

	/* Show textbox */
	$(".message-animate-container").on("click", function() {
		this.remove();
		$(".message-textarea").removeClass("hidden");
	})
});