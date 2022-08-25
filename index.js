const colour = document.getElementById("colour");

document.addEventListener("keydown",pressKey);

function pressKey(e){
    if(e.which == 66 || e.keycoder == 66){
        colour.innerHTML = "BLUE;";
        document.body.style.backgroundColor = "#0C55F3"
    }
    else if(e.which == 82 || e.keycoder == 82){
        colour.innerHTML = "RED;";
        document.body.style.backgroundColor = "#F90C37"
    }
    else if(e.which == 80 || e.keycoder == 80){
        colour.innerHTML = "PINK;";
        document.body.style.backgroundColor = "#F26DEC "
    }
    else if(e.which == 89 || e.keycoder == 89){
        colour.innerHTML = "YELLOW;";
        document.body.style.backgroundColor = "#F3E320"
    }
    else if(e.which == 79 || e.keycoder == 79){
        colour.innerHTML = "ORANGE;";
        document.body.style.backgroundColor = "#FF9104"
    }
    else if(e.which == 86 || e.keycoder == 86){
        colour.innerHTML = "VIOLET;";
        document.body.style.backgroundColor = "#BE11FF"
    }
    else{
        alert("Not a key function")
        document.body.style.backgroundColor = "#FFFFFF"
        colour.innerHTML = "WHITE;";
    }
}





