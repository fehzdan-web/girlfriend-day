function initializeLetter(){

    const letter = document.querySelector(".letter-paper");

    if(!letter) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                letter.classList.add("show");

            }

        });

    },{
        threshold:0.25
    });

    observer.observe(letter);

}

function initializeLetter(){

    const button=document.getElementById("openLetter");

    const envelope=document.getElementById("envelope");

    button.addEventListener("click",()=>{

        envelope.classList.add("open");

        button.style.display="none";

    });

}

setTimeout(()=>{

    document
    .getElementById("signature")
    .classList
    .add("write");

},1200);