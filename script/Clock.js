var Clock = function() {

	var angles = [];

	var init = function() {
		var date = new Date();

		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		angles[0] = (hours % 12) * 30;
		angles[1] = (minutes % 60) * 6;
		angles[2] = (seconds % 60) * 6;

		var hourHand = document.getElementById("hourhand"),
			minutehand = document.getElementById("minutehand"),
			secondhand = document.getElementById("secondhand");


		hourhand.style.transform = "rotateZ(" + angles[0] + "deg)";
		minutehand.style.transform = "rotateZ(" + angles[1] + "deg)";
		secondhand.style.transform = "rotateZ(" + angles[2] + "deg)";
	}

	setInterval(init, 1000);
}