function calculatePay(data) {
    var start = data[0];       // Start of working day in decimal format (24-hour notation)
    var end = data[1];         // End of working day in decimal format (24-hour notation)
    var hourlyRate = data[2];  // Hourly rate
    var overtimeMultiplier = data[3]; // Overtime multiplier

    var regularHours = 8;      // Regular working hours from 9 to 5 (8 hours)
    var startOfWork = 9;       // Start of regular working hours
    var endOfWork = 17;        // End of regular working hours (5 PM)

    var regularPay = 0;
    var overtimePay = 0;

    if (end <= endOfWork) {
        // Case 1: If work ends before or at 5 PM
        if (start < startOfWork) {
            // If work starts before 9 AM, only count hours from 9 AM to end
            regularPay = (end - startOfWork) * hourlyRate;
        } else {
            // Regular case: Calculate pay within working hours only
            regularPay = (end - start) * hourlyRate;
        }
    } else {
        // Case 2: If work ends after 5 PM
        if (start < startOfWork) {
            // If work starts before 9 AM, calculate regular hours from 9 AM to 5 PM
            regularPay = regularHours * hourlyRate;
            overtimePay = (end - endOfWork) * hourlyRate * overtimeMultiplier;
        } else if (start < endOfWork) {
            // If work starts between 9 AM and 5 PM, calculate regular hours until 5 PM
            regularPay = (endOfWork - start) * hourlyRate;
            overtimePay = (end - endOfWork) * hourlyRate * overtimeMultiplier;
        } else {
            // If work starts after 5 PM, all hours are overtime
            overtimePay = (end - start) * hourlyRate * overtimeMultiplier;
        }
    }

    // Total pay is the sum of regular pay and overtime pay
    var totalPay = regularPay + overtimePay;

    // Round to the nearest hundredth
    totalPay = Math.round(totalPay * 100) / 100;

    return totalPay;
}

// Example usage:
var data = [9, 18, 17, 1.5];  // Start at 8:30 AM, end at 6 PM, $15 hourly rate, 1.5x overtime multiplier
console.log(calculatePay(data)); // Output the total pay earned that day
