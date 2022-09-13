//문제 구매한 각 물건의 가격과 개수가 구매한 물건들의 총 금액과 일치?
// 입력
// 260000
// 4
// 20000 5
// 30000 2
// 10000 6
// 5000 8
// 출력 yes

//다시 풀어보기
//풀이1
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const total = Number(input[0]);
const count = Number(input[1]);
let result = 0;

for (let i = 0; i < count; i++) {
  let tmpStr = input[i + 2];
  let tmpArr = tmpStr.split(" ");
  let tmpSum = tmpArr[0] * tmpArr[1];
  result += tmpSum;
}

total === sum ? console.log("Yes") : console.log("No");

//풀이1;
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let total = +input[0];
let cnt = +input[1];
let sum = 0;

for (let i = 2; i <= cnt + 1; ++i) {
  let newArr = input[i].split(" ").map((item) => Number(item));
  sum += newArr[0] * newArr[1];
}

console.log(total === sum ? "Yes" : "No");
