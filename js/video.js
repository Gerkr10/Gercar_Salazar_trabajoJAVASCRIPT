const $repro = document.getElementById("repro");
const $title = document.title;

window.addEventListener("blur", (e) =>{
    document.title = "pausa video";
    $repro.pause();

})

window.addEventListener ("focus", (e)=>{
    document.title = $title;
    $repro.play();
});