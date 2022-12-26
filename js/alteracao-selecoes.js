//Groups A - H
let groupsWorldCup = [

    [
        netherlands = {
            name: "Netherlands",
            flag: "netherlands.png"
        },

        senegal = {
            name: "Senegal",
            flag: "senegal.png"
        },

        equador = {
            name: "Ecuador",
            flag: "ecuador.webp"
        },

        catar = {
            name: "Qatar",
            flag: "qatar.png"
        }
    ],

    [
        england = {
            name: "England",
            flag: "england.png"
        },

        iran = {
            name: "Iran",
            flag: "iran.png"
        },

        usa = {
            name: "USA",
            flag: "USA.png"
        },

        wales = {
            name: "Wales",
            flag: "wales.png"
        }
    ],

    [
        argentina = {
            name: "Argentina",
            flag: "argentina.png"
        },

        saudiArabia = {
            name: "Saudi Arabia",
            flag: "saudi-arabia.png"
        },

        mexico = {
            name: "Mexico",
            flag: "mexico.png"
        },

        poland = {
            name: "poland",
            flag: "poland.png"
        }
    ],

    [
        france = {
            name: "France",
            flag: "france.png"
        },

        australia = {
            name: "Australia",
            flag: "australia.png"
        },

        denmark = {
            name: "Denmark",
            flag: "denmark.png"
        },

        tunisia = {
            name: "Tunisia",
            flag: "tunisia.png"
        }
    ],

    [
        spain = {
            name: "Spain",
            flag: "spain.png"
        },

        costaRica = {
            name: "Costa Rica",
            flag: "costa-rica.png"
        },

        germany = {
            name: "Germany",
            flag: "germany.png"
        },

        japan = {
            name: "Japan",
            flag: "japan.png"
        }
    ],

    [
        belgium = {
            name: "Belgium",
            flag: "belgium.png"
        },

        morocco = {
            name: "Morocco",
            flag: "morocco.png"
        },

        canada = {
            name: "Canada",
            flag: "canada.png"
        },

        croatia = {
            name: "Croatia",
            flag: "croatia.png"
        }
    ],

    [
        brazil = {
            name: "Brazil",
            flag: "brazil.png"
        },

        serbia = {
            name: "Serbia",
            flag: "serbia.png"
        },

        switzerland = {
            name: "Switzerland",
            flag: "switzerland.png"
        },

        cameroon = {
            name: "Cameroon",
            flag: "cameroon.png"
        }
    ],

    [
        portugal = {
            name: "Portugal",
            flag: "portugal.png"
        },

        ghana = {
            name: "Ghana",
            flag: "ghana.png"
        },

        uruguay = {
            name: "Uruguay",
            flag: "uruguay.png"
        },

        southKorea = {
            name: "South Korea",
            flag: "south-korea.png"
        }
    ]

]


//Grupos A - H
groupA = groupsWorldCup[0]
groupB = groupsWorldCup[1]
groupC = groupsWorldCup[2]
groupD = groupsWorldCup[3]
groupE = groupsWorldCup[4]
groupF = groupsWorldCup[5]
groupG = groupsWorldCup[6]
groupH = groupsWorldCup[7]



let areaTimes = document.querySelector("#area-times")

let listaGrupos = document.querySelector("#lista-grupos")
let selecao1P = document.querySelector("#selecao1-p")
let selecao1Img = document.querySelector("#selecao1-img")

let selecao2 = document.querySelector("#selecao2-p")
let selecao3 = document.querySelector("#selecao3-p")
let selecao4 = document.querySelector("#selecao4-p")

/*
grupos.addEventListener("change", 

    //Query Teams for group
    function listTeams(){


        console.log(`Team: ${groupA[1].name} | ${groupA[1].flag}`)

        selecao1P.innerHTML = groupA[0].name
        selecao1Img.src = "img/flags/" + groupA[1].flag

        //listTeams(groupB)

    }

    
)
*/


listaGrupos.addEventListener("change", 
    
    //Query Teams for group
    function listTeams (){

        areaTimes.innerHTML = ``
        
        /*
        switch(listaGrupos.value){
            case listaGrupos.value == "groupA":
                groupSelected = groupA
                break

            case listaGrupos.value == "groupB":
                    groupSelected = groupB
                    break
            default:
                    groupSelected = groupH
        }
        */

        if(listaGrupos.value == "groupA"){
            groupSelected = groupA
        }else if(listaGrupos.value == "groupB"){
            groupSelected = groupB
        }else if(listaGrupos.value == "groupC"){
            groupSelected = groupC
        }else if(listaGrupos.value == "groupD"){
            groupSelected = groupD
        }else if(listaGrupos.value == "groupE"){
            groupSelected = groupE
        }else if(listaGrupos.value == "groupF"){
            groupSelected = groupF
        }else if(listaGrupos.value == "groupG"){
            groupSelected = groupG
        }else if(listaGrupos.value == "groupH"){
            groupSelected = groupH
        }

       

        for(i = 0; i < groupSelected.length; i++){

            console.log(`Team: ${groupSelected[i].name}`)

            areaTimes.innerHTML += 
            `
            <div class="time">
					<img id="selecao1-img" src="img/flags/${groupSelected[i].flag}" width="255" height="170">
					<p id="selecao1-p" class="nome-pais">${groupSelected[i].name}</p>
			</div>

            `
            

        }
    }


    
)








