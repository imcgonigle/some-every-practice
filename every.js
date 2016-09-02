module.exports = {
  allEven : allEven,
  allSameType : allSameType,
  positiveMatrix : positiveMatrix,
  allSameVowels : allSameVowels
};

// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(function(element) {
    return (element % 2 == 0);
  });
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every(function(element) {
    return (typeof input[0] === typeof element);
  });
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(function(element) {
    if ( element.constructor !=  Array) {
      return false;
    }
    return element.every(function(number) {
      return number > 0;
    })
  });
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {

  return input.every(function(element) {

    if (element.constructor == String) {

        let hasVowel = false;

        for (let i of ['a', 'e', 'i', 'o', 'u']) {
          if (element.includes(i)) {
            if (hasVowel == true){
              return false
            } else {
              hasVowel = true;
            }
          }
        }

        return true;

    }
  });
};
