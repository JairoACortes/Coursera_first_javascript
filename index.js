// Excercise 1
console.log("hola mudno !!!");
var perro = "luisa";
console.log(perro);
var perro = "valentin";
console.log(perro);


// Excercise 2
const age = 15;

for (let age = 1; age <= 10; age++) {
    console.log(age);
}

console.log(age);

// Excercise 3
const myDog = "Jack Russell Terrier";
var shortLeggies = true;

if (shortLeggies) {
    let myDog = "Welsh Corgie";
    console.log(myDog);
} else {
    let myDog = "Border Collie";
    console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier


//Excercise 4
var painter = {
    name: "Van Gogh",
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};

painter.birthDate = "March 30, 1853";
painter.paintings.push("Something");
console.log(painter);
// Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }


//Excercise 5

const ingredients = {
    tea: 'black',
    milk: 'soy',
    sweetener: 'honey',
    spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
}

// Destructure the parameters
function prepareChai({tea = "regular",milk,sweetener,spices = [second]}) {
    tea = "regular"
    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " + 
        "Simmer for 3 min. Serve masala chai hot or warm!");
}

prepareChai(ingredients);

//Excercise 6

// console.log(breed);
// const breed = "Cocker Spaniel";

//Excercise 7
const person = {
    name: 'Dev',
    age: 23
};
// Object.freeze(person);
person.age = 24;

console.log(person);

//Excercise 8

const spices = ['ginger', 'cardamom', 'cinnamon', 'nutmeg'];
const [first, second, ...other] = spices;

console.log(first, second, other);