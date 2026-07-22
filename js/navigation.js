function initializeNavigation(){

    const links=document.querySelectorAll(".navbar a");

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            console.log("Navigating...");

        });

    });

}