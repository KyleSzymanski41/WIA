 window.onload = function() {

     document.getElementById('button').onclick = function() {
        document.getElementById('modal').style.display = "none"
    };
        // running modernizr

if (Modernizr.video) {
  // let's play some video! but what kind?
  if (Modernizr.video.webm) {
    // try WebM
  } else if (Modernizr.video.ogg) {
    // try Ogg Theora + Vorbis in an Ogg container
  } else if (Modernizr.video.h264){
    // try H.264 video + AAC audio in an MP4 container
  }
    else { alert("no video");
}


   
}
 };