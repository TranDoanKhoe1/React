/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �
*/
// Data 1
// Mark
const markWeight1 = 78;
const markHeight1 = 1.69;
// John
const johnWeight1 = 92;
const johnHeight1 = 1.95;
// Data 2

const markWeight2 = 95;
const markHeight2 = 1.88;  

const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI1, johnBMI1, markHigherBMI1);
console.log(markBMI2, johnBMI2, markHigherBMI2);
/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/
if (markHigherBMI1) {
    console.log(`Chỉ số BMI của Mark (${markBMI1}) cao hơn của John (${johnBMI1})!`);
} else {    
    console.log(`Chỉ số BMI của John (${johnBMI1}) cao hơn của Mark (${markBMI1})!`);
}
if (markHigherBMI2) {
    console.log(`Chỉ số BMI của Mark (${markBMI2}) cao hơn của John (${johnBMI2})!`);
} else {
    console.log('Chỉ số BMI của John cao hơn của Mark!');
}

/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinsScore1 = (96 + 108 + 89) / 3;
const koalasScore1 = (88 + 91 + 110) / 3;

const dolphinsScore2 = (97 + 112 + 101) / 3;
const koalasScore2 = (109 + 95 + 123) / 3;

const dolphinsScore3 = (97 + 112 + 101) / 3;
const koalasScore3 = (109 + 95 + 106) / 3;

if (dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100) {
    console.log(`Đội Dolphins giành cúp!`);
} else if (koalasScore1 > dolphinsScore1 && koalasScore1 >= 100) {
    console.log(`Đội Koalas giành cúp!`);
} else if (dolphinsScore1 === koalasScore1 && dolphinsScore1 >= 100 && koalasScore1 >= 100) {
    console.log(`Cả hai đội đều giành cúp!`);
} else {
    console.log(`Không đội nào giành cúp!`);
}

if (dolphinsScore2 > koalasScore2 && dolphinsScore2 >= 100) {
    console.log(`Đội Dolphins giành cúp!`);
} else if (koalasScore2 > dolphinsScore2 && koalasScore2 >= 100) {
    console.log(`Đội Koalas giành cúp!`);
} else if (dolphinsScore2 === koalasScore2 && dolphinsScore2 >= 100 && koalasScore2 >= 100) {
    console.log(`Cả hai đội đều giành cúp!`);
} else {
    console.log(`Không đội nào giành cúp!`);
}

if (dolphinsScore3 > koalasScore3 && dolphinsScore3 >= 100) {
    console.log(`Đội Dolphins giành cúp!`);
} else if (koalasScore3 > dolphinsScore3 && koalasScore3 >= 100) {
    console.log(`Đội Koalas giành cúp!`);
} else if (dolphinsScore3 === koalasScore3 && dolphinsScore3 >= 100 && koalasScore3 >= 100) {
    console.log(`Cả hai đội đều giành cúp!`);
} else {
    console.log(`Không đội nào giành cúp!`);
}
/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`Hóa đơn là ${bill1}, tiền tip là ${tip1}, và tổng giá trị là ${bill1 + tip1}`);
console.log(`Hóa đơn là ${bill2}, tiền tip là ${tip2}, và tổng giá trị là ${bill2 + tip2}`);
console.log(`Hóa đơn là ${bill3}, tiền tip là ${tip3}, và tổng giá trị là ${bill3 + tip3}`);

/* Part 2 */
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
*/
const calcAverage1 = (a, b, c) => (a + b + c) / 3;
const avgDolphins1 = calcAverage1(44, 23, 71);
const avgKoalas1 = calcAverage1(65, 54, 49);
const avgDolphins2 = calcAverage1(85, 54, 41);
const avgKoalas2 = calcAverage1(23, 34, 27);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Đội Dolphins thắng (${avgDolphins} điểm vs. ${avgKoalas} điểm)`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Đội Koalas thắng (${avgKoalas} điểm vs. ${avgDolphins} điểm)`);
    } else {
        console.log('Không đội nào thắng...');
    }
}
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
*/
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const billss = [125, 555, 44];
const tipss = [calcTip(billss[0]), calcTip(billss[1]), calcTip(billss[2])];
const total = [billss[0] + tipss[0], billss[1] + tipss[1], billss[2] + tipss[2]];
console.log(billss, tipss, total);
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};
mark.calcBMI();
john.calcBMI();
if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName} có chỉ số BMI (${mark.BMI}) cao hơn ${john.fullName} (${john.BMI})!`);
}
else {
    console.log(`${john.fullName} có chỉ số BMI (${john.BMI}) cao hơn ${mark.fullName} (${mark.BMI})!`);
}
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));

/* Part 3 */
/* JavaScript in the Browser: DOM and Events

Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/


let score = 0;
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Các phần tử HTML
const score1Input = document.getElementById('score1');
const score2Input = document.getElementById('score2');
const score3Input = document.getElementById('score3');
const resultElement = document.getElementById('result');
const numberElement = document.getElementById('number');
const clickButton = document.getElementById('click');
const againButton = document.querySelector('.again');

// Hàm để khôi phục lại trò chơi
function resetGame() {
    score = 0;
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Khôi phục lại các ô nhập liệu
    score1Input.value = '';
    score2Input.value = '';
    score3Input.value = '';
    
    // Khôi phục lại hiển thị kết quả
    resultElement.textContent = '';

    // Khôi phục lại màu nền và chiều rộng của số
    numberElement.style.backgroundColor = '#222';
    numberElement.style.width = '15rem';

  
}

againButton.addEventListener('click', resetGame);

clickButton.addEventListener('click', function () {
    const score1 = parseInt(score1Input.value);
    const score2 = parseInt(score2Input.value);
    const score3 = parseInt(score3Input.value);
    const totalScore = score1 + score2 + score3;

    resultElement.textContent = 'Tổng Điểm: ' + totalScore;
});


