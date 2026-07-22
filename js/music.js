function initializeMusic(){

    const music=document.getElementById("bgMusic");

    const button=document.getElementById("musicBtn");

    if(!music || !button) return;

    button.addEventListener("click",()=>{

        if(music.paused){

            music.play();

            button.textContent="⏸ Pause Our Song";

        }else{

            music.pause();

            button.textContent="🎵 Play Our Song";

        }

    });

}