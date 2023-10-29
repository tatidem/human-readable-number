module.exports = function toReadable (number) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number === 0) return "zero";

    function convertBelowThousand(n) {
        if (n === 0) return "";
        if (n < 10) return ones[n];
        if (n < 20) return teens[n - 10];
        const ten = Math.floor(n / 10);
        const one = n % 10;
        return tens[ten] + (one > 0 ? (ten >= 2 ? " " : "") + ones[one] : "");
    }

    let result = "";
    const thousands = Math.floor(number / 1000);
    const hundreds = Math.floor((number % 1000) / 100);
    const belowHundred = number % 100;

    if (thousands > 0) {
        result += ones[thousands] + " thousand";
    }
    if (hundreds > 0) {
        result += result ? " " : "";
        result += ones[hundreds] + " hundred";
    }
    if (belowHundred > 0) {
        result += result ? " " : "";
        if (belowHundred === 10) {
            result += "ten";
        } else {
            result += convertBelowThousand(belowHundred);
        }
    }

    return result;
}
