document.addEventListener("DOMContentLoaded" , () => {
    const toggleBtn = document.getElementById("togglebtn");
    const links = document.getElementById("links");
    const changeBtn = document.getElementById("changeButton")
    const body = document.getElementById("changeBody");
    const footer =document.getElementById("footer");
    const github = document.getElementById("github");
    const author = document.getElementById("author");
    const all = document.getElementById("allsub");
    const home = document.getElementById("home"); 
    const footerTxt = document.getElementById("footertext");
    const listTxt1 = document.getElementById("text-1")
    const listTxt2 = document.getElementById("text-2")
    const listTxt3 = document.getElementById("text-3")
    const listTxt4 = document.getElementById("text-4")
    const listTxt5 = document.getElementById("text-5")
    const acsTxt = document.getElementById("acstxt")
    const homeTxt = document.getElementById("hometxt")
    const allTxt = document.getElementById("alltxt")
    const allSub = document.getElementById("allsub")

    toggleBtn.addEventListener("click" , () => {
        if(links.classList.contains("hidden")){
            links.classList.remove("hidden");
            links.classList.add("flex" , "flex-col" , "justify-center" , "gap-7");
        } else {
            links.classList.add("hidden");
        }
        
    });

    changeBtn.addEventListener("click" , () => {
        body.classList.toggle("bg-black");
        body.classList.toggle("text-white");
        author.classList.toggle("text-white");
        footer.classList.toggle("bg-black")
        changeBtn.classList.toggle("bg-white");
        github.classList.toggle("text-white");
        home.classList.toggle("text-[#BBBBBB]");
        all.classList.toggle("text-[#BBBBBB]");
        acsTxt.classList.toggle("text-[#BBBBBB]");
        homeTxt.classList.toggle("text-[#BBBBBB]");
        allTxt.classList.toggle("text-[#BBBBBB]");
        links.classList.toggle("text-[#BBBBBB]");
        footerTxt.classList.toggle("text-[#FF8400]");
        allSub.classList.toggle("text-[#FF8400]");
        listTxt1.classList.toggle("text-white");
        listTxt2.classList.toggle("text-white");
        listTxt3.classList.toggle("text-white");
        listTxt4.classList.toggle("text-white");
        listTxt5.classList.toggle("text-white");

    });
});



