// Function to check if the input is a valid Date object

function isDateObject(input) {
    return input instanceof Date && !isNaN(input.getTime());
}

// Example usage:
console.log(isDateObject(new Date())); // true
console.log(isDateObject("2023-10-01")); // false
console.log(isDateObject(new Date("invalid date"))); // false


let input_date = "2023-10-01";


function getLastDayOfMonth(year, month) {
    // Create a date for the first day of the next month
    const nextMonth = new Date(year, month + 1, 1);
    // Subtract one day to get the last day of the current month
    nextMonth.setDate(0);
    return nextMonth.getDate();
}

// Example usage:
console.log(getLastDayOfMonth(2023, 9)); // 31 (October has 31 days)
console.log(getLastDayOfMonth(2023, 1)); // 28 (February has 28 days in 2023)

