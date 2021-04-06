function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate / 100
    actual_year = new Date().getFullYear()
    future_year = actual_year + Number(years)

    if (validate_numer() == true) {
        document.getElementById("result").innerHTML =
    "If you deposit <mark>" + principal + "</mark>,<br />" +
    "at an interest rate of <mark>" + rate + "</mark>.<br />" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br />" +
    "in the year <mark>" + future_year + "</mark>"
    }
}

function read_value()
{
    document.getElementById("rate_value").innerHTML = document.getElementById("rate").value + '%';

}

function validate_numer()
{
    amount = document.getElementById("principal").value;

    if (amount <= 0) {
        alert('Enter a positive number')
        document.getElementById("principal").focus()
        return false
    }

    return true
}
