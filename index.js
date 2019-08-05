function wakeDog(dogName, dogBreed) {
   let blurb = `Wake ${dogName} the ${dogBreed}`;
    return blurb
}

function leashDog(dogName, dogBreed) {
    let blurb = `Leash ${dogName} the ${dogBreed}`;
    return blurb
}

function walkToPark(dogName, dogBreed) {
    let blurb = `Walk to the park with ${dogName} the ${dogBreed}`;
    return blurb
}

function throwFrisbee(dogName, dogBreed) {
    let blurb = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return blurb
}

function walkHome(dogName, dogBreed) {
    let blurb = `Walk home with ${dogName} the ${dogBreed}`;
    return blurb
}

function unleashDog(dogName, dogBreed) {
    let blurb = `Unleash ${dogName} the ${dogBreed}`;
    return blurb
}


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]



function exerciseDog(dogName, dogBreed) {
    return routine.map(x => x(dogName, dogBreed));
}