console.log(2)

function calculer_fx(x) {
    let letx = 3*x +2
    console.log("Resultat de la fonction : ", letx)
}

calculer_fx(3)


let L = [10, 2, -99, 10888, 5]
function minMax(L) {
    let min = L[0]
    let max = L[0]

    for (let i=1; i<L.length; i++) {
        if (L[i] < min) {
            min = L[i]
        }

        if (L[i] > max) {
            max = L[i]
        }
    }

    let minMax = [min, max]
    console.log(minMax)
    return minMax
}

minMax(L)

let title = document.title
title = "Hey"

document.title = "PROJET COURS 2"

let divTags = document.getElementsByTagName("div")
let nbLgo = document.getElementsByClassName("nb-logo")[0]
let nbLgo2 = document.querySelectorAll(".nb-logo")[0]

nbLgo.innerHTML = ""

const connexion = document.getElementsByClassName('btn-white')[0];
console.log(connexion)
connexion.addEventListener('click', function() {
    console.log("Hello world!")
});

console.log(title)
console.log("NbLogo :", nbLgo.innerHTML)
console.log("Nblogo2 : ", nbLgo2)