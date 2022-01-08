module.exports = function toReadable (number) {
    let odjNum = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    }
    let strNum = number.toString();
    const numDiv10 = number / 10;
    const numDiv100 = number / 100;
    const numDivRest10 = number % 10;
    const numDivRest100 = number % 100;
    switch(strNum.length) {
        case 1:
            return odjNum[number];
        case 2:
            if (number < 20) {
                return odjNum[number];
            }
            if (numDivRest10 === 0) {
                return odjNum[number];
            }
            return odjNum[Math.floor(numDiv10) * 10] + " " + odjNum[numDivRest10];
        case 3:
            if (numDivRest100 === 0) {
                return odjNum[numDiv100] + " " + "hundred";
            }
            if (numDivRest10 === 0) {
                return odjNum[Math.floor(numDiv100)] + " " + "hundred" + " " + odjNum[numDivRest100];
            }
            if (numDivRest100 > 0 && numDivRest100 < 10) {
                return odjNum[Math.floor(numDiv100)] + " " + "hundred" + " " + odjNum[numDivRest100];
            }
            if (numDivRest100 > 10 && numDivRest100 < 20) {
                return odjNum[Math.floor(numDiv100)] + " " + "hundred" + " " + odjNum[numDivRest100];
            }
                return odjNum[Math.floor(numDiv100)] + " " + "hundred" + " " + odjNum[strNum[1] * 10] + " " + odjNum[numDivRest10];
    }
}
