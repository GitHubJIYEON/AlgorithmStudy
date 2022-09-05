//2번문제
// 예제 입력
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
//예제 출력
// 2
// 5
// 7
// 17
// 7

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
