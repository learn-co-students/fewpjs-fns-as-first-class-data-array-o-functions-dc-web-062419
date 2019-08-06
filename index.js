function wakeDog(dogName, dogBreed) {
    let did = (`Wake ${dogName} the ${dogBreed}`);
    console.log(did);
    return did;
    }

function leashDog(dogName, dogBreed) {
    let did = (`Leash ${dogName} the ${dogBreed}`);
    console.log(did);
    return did;
    }

function walkToPark(dogName, dogBreed) {
    let did = (`Walk to the park with ${dogName} the ${dogBreed}`);
    console.log(did);
    return did;
    }

function throwFrisbee(dogName, dogBreed) {
    let did = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(did);
    return did;
    }

function walkHome(dogName, dogBreed) {
    let did = (`Walk home with ${dogName} the ${dogBreed}`);
    console.log(did);
    return did;
    }

function unleashDog(dogName, dogBreed) {
    let did = (`Unleash ${dogName} the ${dogBreed}`);
    console.log(did);
    return did;
    }

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let saidGodDamn = routine.map(thisJob => thisJob(dogName, dogBreed))
    return saidGodDamn
    }