/* Create a function to rotate a two-dimensional matrix of N * N integer elements
 * num times where if num is positive, the rotation is clockwise, and if not,
 * then the rotation is counterclockwise
 * 
 Ex: arrRotate ([[2,4],[0,0],1] -> [[0,2],[0,4]])
 */

function arrRotate(arr,num){
    // function to rotate 90 degrees clockwise
const clockwiseRotate = () => {
let temp = []
for(let i =0; i < arr[0].length;i ++){
    let row = []
    for(let j =0; j < arr.length; j++)
        row.unshift(arr[j][i])
        temp.push(row)
}
return temp
}
// function to rotate 90 degrees counter clockwise
const counterclockwiseRotate = () => {
    let temp = []
    for(let i =0; i < arr[0].length; i++){
        let row = []
        for( let j = 0; j < arr.length; j++)
            row.push = (arr[j][i])
        temp.unshift(row)
    }
    return temp
}
// function to rotate 180 degree
const twiceRotate = () => arr.reverse().map(e => e.reverse())

while( num > 4) num -=4
while(num <= 0) num +=4

//perfrom the corresponding rotation
switch(num){
    case 1: return clockwiseRotate
    case 2: return twiceRotate
    case 3: return counterclockwiseRotate
    case 4: return arr
}
}
/* Create a function that takes an array of football clubs with properties:
 * name, wins, loss, draws, scored, conceded, and returns the team name with the
 * highest number of points.
 * if two teams have the same number of points, return the team with the largest
 * goal difference
 * 
 * EX:
 * topTeam{[
 * {
 * Name: "Arsenal",
 * wins: 30,
 * loss: 3,
 * draws: 10,
 * scored: 43,
 * conceded: 3,
 * }
 * 
 * ]
 * }
 */