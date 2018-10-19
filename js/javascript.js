let writeInscription = function(number,textobject) {
    
    let outputField = document.getElementById('overwrite');

    let intervalwrite = setInterval(overwrite,100);
    

    function overwrite() {
        if(number > textobject.length-1) {
            remove(number,textobject);
            clearInterval(intervalwrite);
        }
        else {
            outputField.innerHTML += textobject.charAt(number);
            number++;
        }
    }

    function remove(number,textobject) {
        alert(number,textobject);
    }
}
writeInscription(0,"TALK IS CHEAP SHOW ME THE CODE - Linus Tovalds");