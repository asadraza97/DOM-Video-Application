const video = document.querySelector('video');

video.setAttribute("onclick", "zoomIn()")
const btnParent = document.querySelector('.btnParent')
const audio = document.querySelector('audio');
const container = document.querySelector('.container')
audio.src = "./Asset/Video Application_Assets_anthem.mp3"
function play() {
    video.play()
    audio.play()
};
function pause() {
    video.pause()
    audio.pause()
};

// function zoomIn() {
//     container.style.marginTop = "10px"
//     video.style.width= "1050px"
//     btnParent.style.marginTop = "250px"
//     btnParent.style.marginLeft = "250px"
//     video.setAttribute("onclick","zoomOut()")
// }

    // function zoomOut() {
    //     video.style.width= "600px"
    //     container.style.marginTop = "10%"
    //     btnParent.style.marginTop = "0px"
    //     btnParent.style.marginLeft = "0px"
    //     video.setAttribute("onclick","zoomIn()")
    // }
