function stringChanger(word, operation) {
    if (operation === "capitalize") {
        return word[0].toUpperCase() + word.slice(1);
    }

    else if (operation === "uppercase") {
        return word.toUpperCase();
    }
    else if (operation === "double") {
        return word + word;
    }
    else if (operation === "reverse") {
        let arr = [];
        for (let i = 0; i < word.length; i++) {
            arr.unshift(word[i]);
        }
        return arr.join('');
    }
    else {
        return word;

    }
}
console.log((stringChanger("foo", "capitalize")))
console.log((stringChanger("foo", "uppercase")))
console.log((stringChanger("foo", "double")))
console.log((stringChanger("foo", "reverse")))
console.log((stringChanger("foo", "unknown")))

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(groceries) {
    let cost = 0;
      for (let i = 0; i < groceries.length; i++) {
          let item = groceries[i];
          if (item === 'butter') {
              cost+=1
      }
          else if (item === 'eggs') {
              cost+=2
      }
          else if (item === 'milk') {
              cost+=3
      }
             else if (item === 'bread') {
              cost+=4
      }
      else if (item === 'cheese') {
          cost+=5
      }
  }
  return cost;
}


function mostExpensiveGroceries(groceriesList) {
  let mostExp = 0;
  let indexTag = 0;
  for (let i = 0; i < groceriesList.length; i++) {
        let cost = 0;
      for (let j = 0; j < groceriesList[i].length; j++) {
      let item = groceriesList[i][j];
      if (item === 'butter') {
          cost += 1
      }
      else if (item === 'eggs') {
          cost += 2
      }
      else if (item === 'milk') {
          cost += 3
      }
      else if (item === 'bread') {
          cost += 4
      }
      else if (item === 'cheese') {
          cost += 5
      }
  }
  if (cost > mostExp) {
      mostExp = cost;
      indexTag = i;
  }
  }
  return indexTag;
}

let nextPrime = function (number) {
    let looping = true;
    i = 0;
    while (looping) {
        i++;
        if (i > number && isPrime(i)) {
            return i;
    }
}
}

let isPrime = function (number) {
    for (let i = 2; i < number; i++) {
        if (number%i === 0) {
            return false;
        }
    }
    return true;
}
