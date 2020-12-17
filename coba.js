// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Masukkan nama siswa : ", function(siswa) {
//     rl.question("Masukkan nilai MTK : ", function(mtk) {
//         rl.question("Masukkan nilai B. Indonesia : ", function(bIndo) {
//             rl.question("Masukkan nilai B. Inggris : ", function(bIng) {
//                 rl.question("Masukkan nilai IPA : ", function(ipa) {
//                     // variabel grade
//                     let grade = ''

//                     // nilai rata-rata 
//                     let rt = (parseInt(mtk)+parseInt(bIndo)+parseInt(bIng)+parseInt(ipa))/4

//                     // logika if else
//                     if(rt >= 90 && rt <= 100 ){
//                         grade = 'A'
//                     }else if(rt >= 80 && rt <= 89 ){
//                         grade = 'B'
//                     }else if(rt >= 70 && rt <= 79 ){
//                         grade = 'C'
//                     }else if(rt >= 60 && rt <= 69 ){
//                         grade = 'D'
//                     }else if(rt >= 0 && rt <= 59 ){
//                         grade = 'E'
//                     }else {
//                         console.log('\nOops nilai salah! Silahkan coba kembali!')
//                         goto(ulang )
//                     }


//                     console.log(`Siswa ${siswa} memperoleh nilai rata-rata sebesar: ${rt} dan memperoleh grade "${grade}"`);
//                     rl.close();
//                 });
//             });
//         });
//     });
// });

// rl.on("close", function() {
//     console.log("\nNilai berhasil diinputkan, Terima kasih.\n")
//     process.exit(0)
// });
const pilihan = 'Y'

switch (pilihan) {
    case 'Y': 
    console.log("Hallo") 
    break;
    case 'N' : 
    console.log("Tidak") 
    break; 
}