// objek data
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556", city: "Gwenborough",
    zipcode: "92998-3874",
    },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
}

// variabel objek baru
// let objHobbies = {
//   hobbies: {
//     satu: "Renang",
//     dua : "Membaca buku",
//     tiga : "travelling"
//   }
// }

let objHobbies = ["Renang", "Membaca Buku", "Travelling"]

// menambahkan objek baru ke objek data menggunakan spread operator
let newData = {data, hobbies:[...objHobbies]}

// tampilkan hasil penambahan objek baru
console.log(newData)

// mengganti isi nama, email dan hobi dari objek data baru (newObject)
newData.data.name = "Tomi Mandala Putra"
newData.data.email = "tommymandalaputra@gmail.com"
newData.hobbies[1] = "belajar"

// menampilkan hasil perubahan pada objek baru
// console.log(data) datalama
console.log(newData) // data baru

// jawab poin B
// mengambil data street dan city menggunakan destructing
// let {street, city} = data.address // mengambil dari objek data lama
// let {street, city} = newData.data.address //memanggil dari objek data baru
// let {street:jalan, city:kota} = newData.data.address

// menampilkan hasil 
// console.log(`${street} dan ${city}`) //tempale literals
// console.log(`${jalan} dan ${kota}`)