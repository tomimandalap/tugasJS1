let name = "Tomi Mandala Putra"
let age = 24
const hobbies = ['Footsal', 'Menggambar', 'Membaca']
const isMarried = false
const schoolList = [
  {
    name: "SD Muhammadiyah 1 Wonosobo",
    yaerIn: 2002,
    yearOut: 2008,
    major: null
  },
  {
    name: "SMP Muhammadiyah 1 Wonosobo",
    yaerIn: 2008,
    yearOut: 2011,
    major: null
  },
  {
    name: "SMA N 1 Kotaagung",
    yaerIn: 2011,
    yearOut: 2014,
    major: "IPA"
  },
  {
    name: "Universitas Lampung",
    yaerIn: 2015,
    yearOut: 2020,
    major: "Fisika Instrumantasi"
  }
]
const skills = [
  {
    skill : "Web Devplop",
    html : "Beginner",
    css : "Beginner",
    js : "Beginner",
    php : "Beginner"
  },
  {
    skill : "Programmer Basic",
    C : "Advanced",
    "C++" : "Advanced",
    "C#" : "Advanced"
  },
  {
    skill : "Programmer Microcontroller",
    phyton : "advanced",
    arduino : "expert",
  }
]
const interstInCoding = true

let biodata = {
  'Name' : name,
  'Age' : age,
  'Hobbies' : hobbies[0],
  'isMarried' : isMarried,
  'SchoolList' : schoolList[3],
  'Skills' : skills[2],
  'InterstInCoding' : interstInCoding
}

console.log(biodata)

// console.log(name)
// console.log(age)
// console.log(hobbies[2])
// console.log(isMarried)
// console.log(schoolList[3])
// console.log(skills[2])
// console.log(interstInCoding)

// literals ES6
// console.log(`name: ${name},
// Age: ${age},
// Hobbies: ${hobbies[2]},
// isMarried: ${isMarried},
// schoolList: ${schoolList[3]},
// skills: ${skills[2]},
// interstInCoding: ${interstInCoding}`)