//문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//입력
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2

//출력
// Case #1: 2
// Case #2: 5
// Case #3: 7
// Case #4: 17
// Case #5: 7

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
["5", "1 1", "2 3", "3 4", "9 8", "5 2"];
let count = Number(input[0]);
let result = "";

for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  result += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(result);
//문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//입력
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2

//출력
// Case #1: 2
// Case #2: 5
// Case #3: 7
// Case #4: 17
// Case #5: 7

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
["5", "1 1", "2 3", "3 4", "9 8", "5 2"];
let count = Number(input[0]);
let result = "";

for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  result += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(result);
//문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//입력
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2

//출력
// Case #1: 2
// Case #2: 5
// Case #3: 7
// Case #4: 17
// Case #5: 7

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// ['5', '1 1', '2 3', '3 4', '9 8', '5 2']

for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ");

  console.log(`Case #${i}: ${Number(num[0]) + Number(num[1])}`);
}
