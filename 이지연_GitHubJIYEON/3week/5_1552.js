//입력          출력
import { Container } from "react-bootstrap/Container";
// 5
// 1 1             2
// 12 34           46
// 5 500           505
// 40 60           100
// 1000 1000       2000

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let result = "";

for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  result += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(result);
