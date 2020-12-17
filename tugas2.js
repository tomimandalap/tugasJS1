// input manual
// const mtk = 80
// const bIndo = 90
// const bIng = 89
// const ipa = 69
// let grade
// let nilai = (mtk+bIndo+bIng+ipa)/4

// logika if else
// if(nilai >= 90 && nilai <= 100 ){
//   grade = "A"
// }else if(nilai >= 80 && nilai <= 89 ){
//   grade = "B"
// }else if(nilai >= 70 && nilai <= 79 ){
//   grade = "C"
// }else if(nilai >= 60 && nilai <= 69 ){
//   grade = "D"
// }else if(nilai >= 0 && nilai <= 59 ){
//   grade = "E"
// }else {
//   console.log("Nilai salah!")
// }
// console.log(`Nilai rata-rata : ${nilai} perolehan grade yaitu ${grade}`)

// user
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// setting kondisi dengan variabel global
var kondisi = ''

rl.question("Masukkan nama siswa : ", function(siswa) {
    rl.question("Masukkan nilai MTK : ", function(mtk) {
        rl.question("Masukkan nilai B. Indonesia : ", function(bIndo) {
            rl.question("Masukkan nilai B. Inggris : ", function(bIng) {
                rl.question("Masukkan nilai IPA : ", function(ipa) {
                    // variabel grade
                    let grade = ''

                    // nilai rata-rata 
                    let rt = (parseInt(mtk)+parseInt(bIndo)+parseInt(bIng)+parseInt(ipa))/4

                    // logika if else
                    if(rt >= 90 && rt <= 100 ){
                        grade = 'A'
                    }else if(rt >= 80 && rt <= 89 ){
                        grade = 'B'
                    }else if(rt >= 70 && rt <= 79 ){
                        grade = 'C'
                    }else if(rt >= 60 && rt <= 69 ){
                        grade = 'D'
                    }else if(rt >= 0 && rt <= 59 ){
                        grade = 'E'
                    }else {
                        // console.log('\nOops nilai salah! Silahkan coba kembali!')
                        kondisi = false
                        console.log(`Siswa ${siswa} memperoleh nilai rata-rata sebesar: ${rt}`);
                        rl.close();
                    }

                    kondisi = true
                    // output data
                    console.log(`Siswa ${siswa} memperoleh nilai rata-rata sebesar: ${rt} dan memperoleh grade "${grade}"`);
                    rl.close();
                });
            });
        });
    });
});

rl.on("close", function() {
// logika pengondisian statement
if(kondisi != false){
    console.log("\nNilai berhasil diinputkan, Terima kasih.\n")
    process.exit(0)
}else{
    console.log('\nOops nilai salah! Silahkan coba kembali!\n')
    process.exit(0)
}
});