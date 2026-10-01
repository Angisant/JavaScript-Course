/*
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

const weightMark1 = 78,
  heightMark1 = 1.69;
const weightJohn1 = 92,
  heightJohn1 = 1.95;
const weightMark2 = 95,
  heightMark2 = 1.88;
const weightJohn2 = 85,
  heightJohn2 = 1.75;

const bmiMark1 = weightMark1 / heightMark1 ** 2;
const bmiJohn1 = weightJohn1 / heightJohn1 ** 2;
const bmiMark2 = weightMark2 / heightMark2 ** 2;
const bmiJohn2 = weightJohn2 / heightJohn2 ** 2;

const markHigherBMI1 = bmiMark1 > bmiJohn1;
const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log("Data 1 - Mark has a higher bmi than John:", markHigherBMI1);
console.log("Data 2 - Mark has a higher bmi than John:", markHigherBMI2);
