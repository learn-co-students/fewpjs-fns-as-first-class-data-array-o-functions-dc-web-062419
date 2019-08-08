// var wakeDog = function wakeDog(dogName, dogBreed) {
//     return `Wake ${dogName} the ${dogBreed}`;
// }

var wakeDog = (dogName, dogBreed) => `Wake ${dogName} the ${dogBreed}`;

// var leashDog = function leashDog(dogName, dogBreed) {
//     return `Leash ${dogName} the ${dogBreed}`;
// }

var leashDog = (dogName, dogBreed) => `Leash ${dogName} the ${dogBreed}`;

// var walkToPark = function walkToPark(dogName, dogBreed) {
//     return `Walk to the park with ${dogName} the ${dogBreed}`;
// }

var walkToPark = (dogName, dogBreed) => `Walk to the park with ${dogName} the ${dogBreed}`;

// var throwFrisbee = function throwFrisbee(dogName, dogBreed) {
//     return `Throw the frisbee for ${dogName} the ${dogBreed}`;
// }

var throwFrisbee = (dogName, dogBreed) => `Throw the frisbee for ${dogName} the ${dogBreed}`;

// var walkHome = function walkHome(dogName, dogBreed) {
//     return `Walk home with ${dogName} the ${dogBreed}`;
// }

var walkHome = (dogName, dogBreed) => `Walk home with ${dogName} the ${dogBreed}`;

// var unleashDog = function unleashDog(dogName, dogBreed) {
//     return `Unleash ${dogName} the ${dogBreed}`;
// }

var unleashDog = (dogName, dogBreed) => `Unleash ${dogName} the ${dogBreed}`;

// Putting it all together //

// let routine = function routine() {
//     var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
//     return routine;
// }()

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

// Iterate

function exerciseDog(dogName, dogBreed) {
    return routine.map(dog => dog(dogName, dogBreed))
}

exerciseDog("Xerox", "Border Collie")