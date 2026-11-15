// https://www.freecodecamp.org/japanese/learn/javascript-v9/lab-profile-lookup/lab-profile-lookup

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return Object.hasOwn(contacts[i], prop) ? contacts[i][prop] : "No such property";
    }
  }
  return "No such contact";
}

// for...ofを使うとインデックスの指定がなくてより簡潔になる
function lookUpProfile(name, prop) {
  for (const contact of contacts) {
    if (contact.firstName === name) {
      return Object.hasOwn(contact, prop) ? contact[prop] : "No such property";
    }
  }
  return "No such contact";
}
