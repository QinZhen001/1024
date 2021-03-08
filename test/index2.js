"use strict";

var total = 0;
var resSet = new Set()

function san(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function dfs(result, arr) {
  if (result.length == 3) {
    if (new Set(result).size == 3) {
      console.log(result);
      // 不重复
      if (san(result[0], result[1], result[2])) {
        let rrr = [result[0], result[1], result[2]].sort()
        if(resSet.has(rrr)){
        }else{
          resSet.add(rrr)
          total++;
        }
      }
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    dfs(result, arr);
    result.pop();
  }
}

function xxx(arr) {
  for (let i = 0; i < arr.length; i++) {
    let result = [arr[i]];
    dfs(result, arr);
  }
  console.log(resSet)
  return total;
}

function processData(input) {
  const arr = input
    .split("\n")[1]
    .split(" ")
    .map((str) => parseInt(str.replace(/\s*$/, "")));
  //  const num =  parseInt(input.split("\n")[0])
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  let result = xxx(arr); // 处理逻辑
  ws.write(result + "\n");
  ws.end();
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//   _input += input;
// });

// process.stdin.on("end", function () {
//  processData(_input);
// });

const res = xxx([4, 4, 9, 7, 5]);
console.log("res", res);

// function getZeroListNumber(arr){
//   console.log(arr)
//   let num = 0
//   for(let i = 0; i < arr.length; i++){
//     let temp = arr[i]
//     console.log('arr['+i+']: '+temp)
//     if(temp == 0) num += 1
//     for(let j = i+1; j < arr.length; j++){
//       temp += arr[j]
//       if(temp != 0){
//         console.log('temp: '+temp)
//       }else {
//         num += 1
//         console.log('num: '+num)
//       }
//     }
//   }
//   return num
// }
