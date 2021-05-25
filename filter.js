// Array Filter 1.soru cevabı

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];
  const newPerson = person.filter(item => item.age > 30)
  console.log(newPerson)




// Array Filter 2.soru cevabı

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    },
    
  ];
  const newPerson = person.filter(item => item.languages.includes("JavaScript"))
  console.log(newPerson)