// var number = new Array(100);
// for (var i = 0; i < 100; i++) {
//   number[i] = i + 1;
// }
//
//
//
//
// for (var i = 0; i < number.length; i++) {
//   if(number[i] % 3) {
//     console.log('fizz');
//   }
//   if(number[i] % 5) {
//     console.log('buzz');
//   }
//   if(number[i] % 3 && 5) {
//     console.log('fizzbuzz');
//   } else {
//     console.log(number[i]);
//   }
// }


for(let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if(n % 5 == 0) output += 'Buzz';
  console.log(output || n);
}
