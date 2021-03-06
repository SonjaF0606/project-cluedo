// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "./assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  description: "He has a lot of connections",
  age: 51,
  image: "./assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She has a lot of connections",
  age: 29,
  image: "./assets/scarlet.png",
  occupation: "Headchef"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She has a lot of connections",
  age: 40,
  image: "./assets/peacock.png",
  occupation: "Owner of a Zoo"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He has a lot of connections",
  age: 63,
  image: "./assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She has a lot of connections",
  age: 67,
  image: "./assets/white.png",
  occupation: "CEO"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10
}

const knife = {
  name: "Knife",
  weight: 7,
  length: 40
}

const candlestick = {
  name: "Candlestick",
  weight: 15
}

const dumbbell = {
  name : "Dumbbell",
  weight: 25
}

const poison = {
  name: "Poison",
  weight: 2
}

const axe = {
  name : "Axe",
  weight: 20
}

const bat = {
  name: "Bat",
  weight: 18
}

const trophy = {
  name: "Trohpy",
  weight: 29
}

const pistol = {
  name: "Pistol",
  weight: 7
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]

console.log(suspects)

const weapons = [
  rope, 
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

console.log(weapons)

let rooms = [
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
]

console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
mystery = {
  killer,
  weapon,
  room,
}

console.log(mystery)

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
var killerPicked = false
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = "Age: " + mystery.killer.age
  theKillerOccupation.innerHTML = "Occupation: " + mystery.killer.occupation
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
  return killerPicked = true
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
var weaponPicked = false
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")

  theWeaponName.innerHTML = mystery.weapon.name 
  theWeaponWeight.innerHTML = "Weight: " + mystery.weapon.weight
  return weaponPicked = true
}

var roomPicked = false
const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoom = document.getElementById("roomName")

  theRoom.innerHTML = mystery.room
  return roomPicked = true
}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  const theMystery = document.getElementById("mystery")
  if (killerPicked === false || weaponPicked === false || roomPicked === false) {
    theMystery.innerHTML = "No mystery is yet to be revealed! Pick a killer, a weapon and a room!"
  } else {
    theMystery.innerHTML = "The murder was committed by " + mystery.killer.firstName + " " + mystery.killer.lastName + ", in the " + mystery.room + " with a " + mystery.weapon.name + "."
  }
  
}
