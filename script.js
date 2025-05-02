document.addEventListener("DOMContentLoaded" , () => {
    const toggleBtn = document.getElementById("togglebtn");
    const links = document.getElementById("links");
    const changeBtn = document.getElementById("changeButton")
    const body = document.getElementById("changeBody");
    const footer =document.getElementById("footer");
    const github = document.getElementById("github")

    toggleBtn.addEventListener("click" , () => {
        if(links.classList.contains("hidden")){
            links.classList.remove("hidden");
        } else {
            links.classList.add("hidden");
        }
    });

    changeBtn.addEventListener("click" , () => {
     
        // if(body.classList.contains("bg-black")){
        //     body.classList.remove("bg-black");

        // } else {
        //     body.classList.toggle("bg-black");
        //     body.classList.toggle("text-white");
        //     footer.classList.toggle("bg-black", "text-white");
        //     changeBtn.classList.toggle("bg-white");
        // }

        body.classList.toggle("bg-black");
        body.classList.toggle("text-white");
        footer.classList.toggle("bg-black", "text-white");
        changeBtn.classList.toggle("bg-white");
        github.classList.toggle("text-white");

    });
});



