function wakeDog(dogName, dogBreed) {
    var ret = `Wake ${dogName} the ${dogBreed}`
    console.log(ret)
    return ret
  }

  function leashDog(dogName, dogBreed){
    var ret = `Leash ${dogName} the ${dogBreed}`
    console.log(ret)
    return ret
  }

  function walkToPark(dogName, dogBreed) {
    var ret = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(ret)
    return ret
  }

  function throwFrisbee(dogName, dogBreed) {
    var ret = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(ret)
    return ret
  }

  function walkHome(dogName, dogBreed) {
    var ret = `Walk home with ${dogName} the ${dogBreed}`
    console.log(ret);
    return ret
  }

  function unleashDog(dogName, dogBreed) {
    var ret = `Unleash ${dogName} the ${dogBreed}`
    console.log(ret)
    return ret
  }
  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dogName, dogBreed){
    var results = []
    for (var i = 0; i < routine.length; i++){
        let res = routine[i](dogName, dogBreed)
        results.push(res)
    }
    return results
  }