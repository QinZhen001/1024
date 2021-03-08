// const fs = require('fs')

// function xxx(arr) {
//   let currnt = arr[0];
//   let num = arr[1];
//   let pace = arr[2];
//   if (Math.abs(currnt) > num * Math.abs(pace)) {
//     return Math.abs(currnt) - num * Math.abs(pace);
//   }

//   let zero_left = 0;
//   let zero_right = 0;
//   let index = 0;
//   let final = 0;

//   if (currnt < 0) {
//     for (let i = 1; i <= num; i++) {
//       currnt = currnt + pace;
//       if (currnt <= 0 && currnt + pace >= 0) {
//         zero_left = currnt;
//         zero_right = currnt + pace;
//         index = i;
//         break;
//       }
//     }
//     let rest = num - index;
//     if (rest % 2 == 0) {
//       final = zero_left;
//     }
//     final = zero_right;
//   } else {
//     for (let i = 1; i <= num; i++) {
//       currnt = currnt - pace;
//       if (currnt >= 0 && currnt - pace <= 0) {
//         zero_right = currnt;
//         zero_left = currnt - pace;
//         index = i;
//         break;
//       }
//     }
//     let rest = num - index;
//     if (rest % 2 == 0) {
//       final =  zero_right;
//     } else {
//       final =  zero_left;
//     }
//   }

//   return Math.abs(final)
// }

// function processData(input) {
//   // 每个题目处理不一样，把字符串转成想要的格式
//   const arr = input.split('\n')[1].split(' ').map(str => str.replace(/\s*$/, ''));
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//   let result = xxx(arr); // 处理逻辑
//   ws.write(result + "\n");
//   ws.end();
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//   _input += input;
// });

// process.stdin.on("end", function () {
//  processData(_input);
// });

// let res = xxx([5, 1000, 3]);
// console.log("res", res);



const arr = input.split('\n')[1].split(' ').map(str => parseInt(str.replace(/\s*$/, '')))