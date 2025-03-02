// console.log('2' + 2 + '2'); // ans = 222 (+ operator is used for both numeric addition and string concatenation)
// console.log('2' + 2 - '2');//ans =20 (operator - converts two 22 and 2 strings to 20 number.)

// const y = 0;
// const z = false;
// console.log(y==z);
// console.log(y === z);
// console.log(true + "abc");//ans = trueabc

// const arr = [1,2,3,4];
// const new_arr = arr.map((e)=>{
//      return e *2;
// })
// console.log(new_arr);

const arr = [100,50,200,150];
arr.sort((a,b)=>{
     return a - b;
})
console.log(arr);