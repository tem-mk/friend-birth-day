function openModal() {
    var modal = document.getElementById("videoModal");
    var video = document.getElementById("videoPlayer");

    modal.style.display = "block";
    video.play(); // Auto-play the video when the modal is opened
}

function closeModal() {
    var modal = document.getElementById("videoModal");
    var video = document.getElementById("videoPlayer");

    modal.style.display = "none";
    video.pause(); // Pause the video when the modal is closed
    video.currentTime = 0; // Reset the video to the beginning
}
