// declare an array of teams

let footballTeams = [
    {
        name: "Arsenal",
        wins: 20,
        loss: 8,
        draws: 4,
        scored: 43,
        conceded: 3,
    
    },

    {
        name: "Chelsea",
        wins: 25,
        loss: 3,
        draws: 4,
        scored: 73,
        conceded: 3,
    
    },

    {
        name: "Phoenix",
        wins: 25,
        loss: 3,
        draws: 4,
        scored: 53,
        conceded: 3
    }

];

function calculatePoints(footballTeams){
    for(let i =0; i < footballTeams.length; i++){
        // calculate score
        let wins = footballTeams[i].wins
        let draws = footballTeams[i].draws
        points = (wins * 3) + draws;// formula goes here
        console.log(`${footballTeams[i].name}: ${points} Points`)
        footballTeams[i].points = points
    };
    for( let j =0; j < footballTeams.length; j++){
        // array.reduce() maybe???
    
    }
};

calculatePoints(footballTeams);