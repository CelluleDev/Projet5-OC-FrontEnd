// custom  JavasScript  //


//------------1er tableau en 2dimensions du générateur 1 - Les morceaux de phrases.-------------------------------
let tableauG1 = [
    ['Pour réagir face à ', 'Malgré ', 'Quelle que soit ', 'En ce qui concerne '],
    ['la fragilité ', 'cette inflexion ', 'la difficulté ', 'la crise '],
    ['que nous constatons ', 'générale ', 'actuelle ', 'contextuelle '],
    ["il serait intéressant d' ", "il ne faut pas négliger d' ", "on ne peut se passer d' ", "il est nécessaire d' "],
    ['étudier ', 'examiner ', 'inventorier ', 'arrêter de stigmatiser '],
    ['toutes les ', 'chacune des ', 'la majorité des ', 'la simultanéité des '],
    ['solutions ', 'issues ', 'problématiques ', 'voies '],
    ["imaginables.", "possibles.", " s'offrant à nous."]  
];

//------------------2eme tableau en dimensions du générateur 2 - Les morceaux de phrases.----------------------------
let tableauG2 = [
    ['Vu ', 'Du fait de ', 'Avec ', 'Considérant '],
    ['la dégradation ', 'cette rigueur ', 'la dualité de la situation ', 'la baisse de confiance '],
    ['présente ', 'induite ', 'conjoncturelle ', 'observée '],
    ["il convient d' ", "il faut ", "on se doit d' ", "il est préférable d' "],
    ['anticiper ', 'imaginer ', 'uniformiser ', "avoir à l'esprit "],
    ["l'ensemble des ", "la somme des ", "la totalité des ", "la globalité des "],
    ["alternatives ", "organisations matricielles ", "améliorations ", "ouvertures "],
    ['de bon sens.', "envisageables.", "éventuelles."]
];


// Function aleatoire 
function random(borneMax) {
    return Math.floor(Math.random() * borneMax); // fonction random pour prendre directement un entier en paramètre
}


// function creation de la citation
function createCitation(tableauPhrases) {
    let citation = "";
    tableauPhrases.forEach(function(morceauxPhrases) { // L'instruction for each repete une variable donnée sur toutes les propriétés d'un objet. 
        citation += morceauxPhrases[random(morceauxPhrases.length)]; // L'opérateur court += peut également être utilisé pour concaténer des chaînes 
    });
    return citation; // retourne le resultat 
}



// function listener du clic bouton du 1er generateur (evenement)

function citationBtnListener( boutonCible, tableauDeCitation, cibleAffichage ) { // 1er paramère le bouton du click, 2eme tableau de citations, 3em ou afficher le resultat
  $(boutonCible).on('click', function() { //ces paramètres sont des variables vides qui attendent une donnée, La méthode on () attache un ou plusieurs gestionnaires d'événements aux éléments sélectionnés et aux éléments enfants
    let nb = $("#listederoulante").val(); // //Récupère la valeur de l'option sélectionnée dans une liste déroulante
    let result = '';  // // variable vide pour prendre le resultat
    for(let i = 0; i < nb; i++) { // for ([expressionInitiale]; [condition]; [expressionIncrément]) À chaque éxécution, la variable "nb" augmentera de 1 à la taille de nb
      let str =  createCitation(tableauDeCitation) // variable avec les resultat des citations
       result += str + '<br><br>';  // concatenation et saut de ligne apres le resultat de la citation
    }
    $(cibleAffichage).html(result); // affiche le resultat
  });
};


citationBtnListener('#generateur1', tableauG1, '#citationG1'); // appel de la fonction de l'évenement et des parametres du DOM avec les données pour le g1
citationBtnListener('#generateur2', tableauG2, '#citationG2'); // appel de la fonction de l'évenement et des parametres du DOM avec les données pour le g2



