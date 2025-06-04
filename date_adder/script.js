function isLeapYear(year) {
    /** Check if the given year is a leap year. */
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysInMonth(month, year) {
    /** Return the number of days in the given month and year. */
    if ([4, 6, 9, 11].includes(month)) {
        return 30;
    } else if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    }
    return 31;
}

function isValidDate(day, month, year) {
    /** Validate if the given date is valid. */
    if (!(1 <= month && month <= 12)) {
        return false;
    }
    if (!(1 <= year && year <= 9999)) {
        return false;
    }
    if (!(1 <= day && day <= daysInMonth(month, year))) {
        return false;
    }
    return true;
}

function formatDate(day, month, year) {
    /** Format the date with leading zeros for single-digit day/month. */
    return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
}

function calculateDate() {
    /** Handle date calculation based on user input. */
    const dayInput = document.getElementById('day').value;
    const monthInput = document.getElementById('month').value;
    const yearInput = document.getElementById('year').value;
    const incrementInput = document.getElementById('increment').value;
    const errorElement = document.getElementById('error');
    const oldDateElement = document.getElementById('old-date');
    const newDateElement = document.getElementById('new-date');
    const continueSection = document.getElementById('continue-section');

    // Clear previous outputs
    errorElement.textContent = '';
    oldDateElement.textContent = '';
    newDateElement.textContent = '';
    continueSection.style.display = 'none';

    // Validate inputs
    if (!dayInput || !monthInput || !yearInput || !incrementInput) {
        errorElement.textContent = 'All fields are required.';
        return;
    }

    const day = parseInt(dayInput);
    const month = parseInt(monthInput);
    const year = parseInt(yearInput);
    const increment = parseInt(incrementInput);

    if (isNaN(day) || isNaN(month) || isNaN(year) || isNaN(increment)) {
        errorElement.textContent = 'Please enter valid numeric values.';
        return;
    }

    // Validate date
    if (!isValidDate(day, month, year)) {
        errorElement.textContent = `Invalid date! Day ${day} is not valid for month ${month} in year ${year}. Maximum days: ${daysInMonth(month, year)}.`;
        return;
    }

    // Display old date
    oldDateElement.textContent = `Old date: ${formatDate(day, month, year)}`;

    // Calculate new date
    let newDay = day + increment;
    let newMonth = month;
    let newYear = year;

    // Handle negative increments
    while (newDay <= 0) {
        newMonth -= 1;
        if (newMonth === 0) {
            newMonth = 12;
            newYear -= 1;
        }
        if (newYear < 1) {
            errorElement.textContent = 'Error: Resulting year is invalid (before year 1).';
            return;
        }
        newDay += daysInMonth(newMonth, newYear);
    }

    // Handle positive increments
    while (newDay > daysInMonth(newMonth, newYear)) {
        newDay -= daysInMonth(newMonth, newYear);
        newMonth += 1;
        if (newMonth > 12) {
            newMonth = 1;
            newYear += 1;
        }
        if (newYear > 9999) {
            errorElement.textContent = 'Error: Resulting year exceeds 9999.';
            return;
        }
    }

    // Validate new date
    if (isValidDate(newDay, newMonth, newYear)) {
        newDateElement.textContent = `New date: ${formatDate(newDay, newMonth, newYear)}`;
        continueSection.style.display = 'block';
    } else {
        errorElement.textContent = 'Error: Resulting date is invalid.';
    }
}

function resetForm() {
    /** Reset the form and clear outputs for a new calculation. */
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    document.getElementById('increment').value = '';
    document.getElementById('old-date').textContent = '';
    document.getElementById('new-date').textContent = '';
    document.getElementById('error').textContent = '';
    document.getElementById('continue-section').style.display = 'none';
}

function clearOutput() {
    /** Clear outputs without resetting the form. */
    document.getElementById('old-date').textContent = '';
    document.getElementById('new-date').textContent = '';
    document.getElementById('error').textContent = '';
    document.getElementById('continue-section').style.display = 'none';
}