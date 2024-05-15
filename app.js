document.getElementById('subscriptionButton').addEventListener('click', function() {
    var packageOptions = document.getElementById('packageOptions');
    var selectedPackage = packageOptions.options[packageOptions.selectedIndex].value;

    var days;
    switch (selectedPackage) {
        case '1':
            days = 30;
            break;
        case '2':
            days = 60;
            break;
        case '3':
            days = 90;
            break;
        default:
            days = 0;
    }

    if (days > 0) {
        var today = new Date();
        var startDateString = prompt('Enter the start date for the subscription (YYYY-MM-DD):', today.toISOString().slice(0, 10));
        var startDate = new Date(startDateString);
        
        if (isValidDate(startDate)) {
            var expirationDate = new Date(startDate.getTime() + days * 24 * 60 * 60 * 1000);
            alert('Your Package will expire on ' + expirationDate.toDateString());
        } else {
            alert('Please enter a valid start date (YYYY-MM-DD).');
        }
    } else {
        alert('Please select a package.');
    }
});

function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
}