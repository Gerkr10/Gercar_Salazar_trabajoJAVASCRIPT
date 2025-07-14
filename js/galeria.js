const boxTotalImg = document.getElementById("boxTotalImg"),
totalImg = document.getElementById("totalImg");


function openFulImg(reference){
    boxTotalImg.style.display="flex";
    totalImg.src = reference
}

function closeImag(){
    boxTotalImg.style.display = "none";
}


