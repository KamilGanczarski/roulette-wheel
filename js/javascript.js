window.onload = function() {
    
    writeInscription(0);

}

function writeInscription(a) {
    let number = a;
    
    let outputField = document.getElementById('overwrite');

    const textobject = "TALK IS CHEAP SHOW ME THE CODE - Linus Tovalds";

    if(number > textobject.length) {
        remove();
    }
    else {
        let intervalwrite = setInterval(overwrite,200);
    }

    function overwrite() {

        if(number > textobject.length) {
            clearInterval(interval);
        }
        else {
            outputField.innerHTML += textobject.charAt(number);
        
            number++;
        }
    }
} 