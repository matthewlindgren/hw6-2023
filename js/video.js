let video = document.querySelector("#player1");
let numSlows = 0;

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
	video.load()
});

document.querySelector("#play").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
})

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	++numSlows;
	console.log("Changed playback speed to " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = Math.pow(0.9, numSlows-- - 1);
	console.log("Changed playback speed to " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video location: " + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		document.querySelector("#mute").innerHTML = "Mute";
	}
})

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	console.log("New volume: " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})