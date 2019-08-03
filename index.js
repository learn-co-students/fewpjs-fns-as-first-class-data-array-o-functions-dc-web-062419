function wakeDog(name, breed) {
    let wakeString = `Wake ${name} the ${breed}`;
    console.log(wakeString);
    return wakeString
};

function leashDog(name, breed) {
    let leashString = `Leash ${name} the ${breed}`;
    console.log(leashString);
    return leashString
}

function walkToPark(name, breed) {
    let parkString = `Walk to the park with ${name} the ${breed}`;
    console.log(parkString);
    return parkString
}

function throwFrisbee(name, breed) {
    let throwString = `Throw the frisbee for ${name} the ${breed}`;
    console.log(throwString)
    return throwString 
}

function walkHome(name, breed) {
    let walkString = `Walk home with ${name} the ${breed}`;
    console.log(walkString);
    return walkString
}

function unleashDog(name, breed) {
    let unleashString = `Unleash ${name} the ${breed}`;
    console.log(unleashString);
    return unleashString
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed) {
    let array = []
    for (let i = 0; i < routine.length; i++) {
    let string = routine[i](name, breed);
    array.push(string);
    }
    return array
}


