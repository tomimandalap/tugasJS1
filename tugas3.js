// variabel
// let printSegitiga = 5
// let data = ''
// // decrement
// for (let i=printSegitiga; i>=1 ; i--){
//   // increment
//   for(let j=1; j<=i; j++){
//     data += j
//   }
//   data += '\n'
// }
// console.log(data)

// let printSegitiga = 'a'
let printSegitiga = 5
let data = ''

if (typeof(printSegitiga) !== 'number'){
  console.log(`Oops data data salah!`)
}else{
  // decrement
  for (let i=printSegitiga; i>=1 ; i--){
    // increment
    for(let j=1; j<=i; j++){
      data += j
    }
    data += '\n'
  }
  console.log(data)
}


// function
// function printSegitiga(x) {
//   let data = ''
//   for (let i=x; i>=1 ; i--){
//     for(let j=1; j<=i; j++){
//       data += j
//     }
//     data += '\n'
//   }
//   console.log(data)
// }
// printSegitiga(5)