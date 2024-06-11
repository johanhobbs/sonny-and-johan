function arrRotate(arr, num){

    // function to rotate 90 degrees clockwise
    const clockwiseRotate = () => {
        let temp = []
        for(let i = 0; i < arr[0].length; i++){
            let row = []
            for(let j = 0; j < arr.length; j++){
                row.unshift(arr[j][i])
            }
            temp.push(row)
        }
        return temp
    }

    //function to rotate 90 degrees counterclockwise
    const counterclockwiseRotate = () => {
        let temp = []
        for(let i = 0; i < arr[0].length; i++){
            let row = []
            for(let j = 0; j < arr.length; j++){
                row.push(arr[j][i])
            }
            temp.unshift(row)
        }
        return temp;
    }

    // Function to rotate 180 degrees

    const twiceRotate = () => {arr.reverse().map(e => e.reverse)}

    while(num > 4) num-=4
    while(num <= 0) num+= 4

    //perform the corresponding rotation

    switch(num){
        case 1: return counterclockwiseRotate()
        case 2: return twiceRotate()
        case 3: return counterclockwiseRotate()
        case 4: return arr;
    }
}

console.log(arrRotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 1))