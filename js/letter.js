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