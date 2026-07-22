function initializeTimeline(){

    const cards=document.querySelectorAll(".timeline-content");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

    cards.forEach(card=>observer.observe(card));

}