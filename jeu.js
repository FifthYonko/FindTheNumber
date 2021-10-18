console.log("jeu.js")

// definition variables globales
   
var x =0;
var indice = 0;
var nombre_utili = 0;


// Definition de fonctions
function ChoixOui(){
    document.getElementById("image-start").style.display="none";
    document.getElementById("buttons").style.transform="scale(1)";
    
}

function ChoixNon(){
    window.location="https://www.google.com/";
}
function nombre_aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function nombre_utilisateur() {
    var nombre_choisi = document.getElementById("nombre-choisi").value;
    return nombre_choisi;
}

function niveau1(){
    document.getElementById("jeu").style.transform="scale(1)";
    document.getElementById("buttons").style.transform="scale(0)";
    x= nombre_aleatoire(1,10);
    
    
}

function niveau2(){
  
    document.getElementById("jeu").style.transform="scale(1)";
    document.getElementById("buttons").style.transform="scale(0)";
    x= nombre_aleatoire(1,100);
    
}
function niveau3(){
  
    document.getElementById("jeu").style.transform="scale(1)";
    document.getElementById("buttons").style.transform="scale(0)";
    x= nombre_aleatoire(1,1000);
    
}

   

// Le systeme de jeu




 

 
    function click_utili() {
        
        
        nombre_utili = nombre_utilisateur();
        if(indice==10){
            document.write("GAME OVER!")
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
           
    indice++;
    document.getElementById("nb_indice").innerHTML = "L'indice est a "+indice;

    }
    
  




