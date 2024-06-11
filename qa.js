/* ES5 
create a function that caculaters overtime and pay assiciated with overtime.
working 9 to 5 : operating hours (8 hour)

after 5 pm is overtime
your function get an array with 4 values:
1 start of working day, in decemial format, ( 24 hours data notaiton)
2 end of working day(same format)
hourly rate
3 over time mupltiplier
4 your function should spit out:

note: ($) eraned that day (rounded to the nearst hundreth)
*/
 
function overTime(arr){
    let startTime =  (arr[0]);

    console.log(`Start time: ${startTime}`)

    let endTime = setTime(arr[1]);

    console.log(`End time: ${endTime}`)
    let hourlyRate = arr[2];
    let overtimeRate = arr[3];
    let fivePm = new Date();
    fivePm.setHours(17);
    let income;

    let standardHours = new Date();
    standardHours.setTime(fivePm -startTime);
    let payAtStandardRate = standardHours.getTime()

    if(endTime <= fivePm ){
        let overtimeHours = new Date();
        overtimeHours.setTime(endTime - fivePm);
    }
}

overTime([12.00, 18.00, 5, 2]);

