console.log("jeu.js")

// Definition de fonctions
function nombre_aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function nombre_utilisateur() {
    var nombre_choisi = document.getElementById("nombre-choisi").value;
    return nombre_choisi;
}


// Le systeme de jeu



var x = nombre_aleatoire(1, 100);
var i = 0;
var nombre_utili = 0;


    function click_utili() {

        
        nombre_utili = nombre_utilisateur();
        if(i==10){
            document.write("YOU LOST!!!! FAILED! NOOOB")
        }
        
        else if (nombre_utili > x) {
            document.getElementById("verification").innerHTML = "Plus petit";
        }
        else if (nombre_utili < x) {
            
            document.getElementById("verification").innerHTML = "Plus grand";
        }
        else {
            document.write("bravo, vous avez gagne!")
            document.getElementById("nombre_alea").innerHTML = ("Le nombre aleatoire est : " + x + "<br>");
        }
           
    i++;
    document.getElementById("nb_indice").innerHTML = "L'indice est a "+i;

    }
    
  




