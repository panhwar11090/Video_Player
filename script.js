// Get Dom element for JS CODE
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Create Function for clicking on video

function toggleVideoStatus() {
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// Crete function for updating the play/ pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    }else{
        play.innerHTML= '<i class="fa fa-pause fa-2x"></i>'
    }
}

//CREATE function for update progress
function updateProgerss(){
    progress.value = (video.currentTime / video.duration) *100;

    //set the time for timestamp
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }
    
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}


//crete funtion ofr stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

//Create function to update the video progress using the slider
function setVideoProgess(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

// EVENT LISTENERS
//1. Event listeners for vidoe palyer
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgerss);

// 2. event listener for paly button
play.addEventListener('click', toggleVideoStatus);

//3 event listener for stop button
stop.addEventListener('click', stopVideo);

//4 Event listener for progress bar
progress.addEventListener('change', setVideoProgess);
