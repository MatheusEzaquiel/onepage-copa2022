//Module with groups
const teamsCup = require('./groups')

//Grupos A - H
groupA = groupsWorldCup[0]
groupB = groupsWorldCup[1]
groupC = groupsWorldCup[2]
groupD = groupsWorldCup[3]
groupE = groupsWorldCup[4]
groupF = groupsWorldCup[5]
groupG = groupsWorldCup[6]
groupH = groupsWorldCup[7]


//Query Teams for group
function listTeams (group){

    for(i = 0; i < group.length; i++){
        console.log(`Team: ${group[i].name}    | Flag ${group[i].flag}`)
        
    }
}

listTeams(groupB)

//console.log(`Seleção: ${groups[1][0].name}/ flag: ${groups[1][0].flag}`)

//arrayGeral group
    //grupo: groups[0], groups[1], groups[2]...
        //seleção: groups[0][0], groups[0][1], groups[0][2], groups[0][3]...
            //propriedade do obj groups[0][0].name or groups[0][0].flag

