//문제:n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// 입력 3
// 출력 6

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = input[0];
let result = 0;

for (let i = 1; i <= num; i++) {
  result = result + i;
}
console.log(result);
