$(document).ready(function() {

	/* Typing animation */
	$('.message-animate').typed({
		strings: ["Greetings? ^200\nEnquiries? ^200\nCollaborations? ^200\nLeave us a message."],
      	typeSpeed: 3
    });

	/* Show textbox */
	$(".message-animate-container").on("click", function() {
		this.remove();
		$(".message-textarea").removeClass("hidden");
	})
});