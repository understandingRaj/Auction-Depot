function openlogin() {
	document.getElementById("loginform").style.display = "block";
}


//Categories in subnavbar
$(document).ready(function() {
	$(".sidecategory").click(function() {
		$("#navcategory").toggle();

	});
});


//FAQ
$(document).ready(function() {
	$(".faq").click(function() {
		$(".faq-outer").toggle();

	});
});


// BID NOW------------------------------------------------------
function openbid() {
	document.getElementById("bidnow").style.display = "block";
}
function closebid() {
	document.getElementById("bidnow").style.display = "none";
}
function bidnow() {
	var amount = document.getElementById("bidamount").value;
	document.getElementById("addamount").innerHTML = amount;
	document.getElementById("bidnow").style.display = "none";
}

//Timer countdown
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 18:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("timer").innerHTML = hours + "h ."
		+ minutes + "m ." + seconds + "s ";
		document.getElementById("timer1").innerHTML = hours + "h ."
		+ minutes + "m ." + seconds + "s ";
		document.getElementById("timer2").innerHTML = hours + "h ."
		+ minutes + "m ." + seconds + "s ";
		document.getElementById("timer3").innerHTML = hours + "h ."
		+ minutes + "m ." + seconds + "s ";
		document.getElementById("timer4").innerHTML = hours + "h ."
		+ minutes + "m ." + seconds + "s ";
		document.getElementById("timer5").innerHTML = hours + "h ."
		+ minutes + "m ." + seconds + "s ";

	// If the count down is over, write some text 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);