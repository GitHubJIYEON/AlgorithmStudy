//문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//입력     출력
// 1 1     2
// 2 3     5
// 3 4     7
// 9 8     17
// 5 2     7
// 0 0

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let numbers = input[i].split(" ").map((newArray) => newArray * 1);

  console.log(numbers[0] + numbers[1]);
}
