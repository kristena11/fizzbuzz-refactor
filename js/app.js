$(document).ready(function() {
  
  // global variable
  var highNumber

  // declare some functions
  function fizzBuzz(number) {
    console.log('Let\'s Buzz all the way to ' + number);

    //start the loop - the real fizzbuzz logic here
    for (var i = 1; i < (number + 1); i++) {
       if (i%3=== 0 && i%5===0) {
        $('html').append("FizzBuzz").append('<br/>');
    } else if (i % 3 === 0) {
        $('html').append("Fizz").append('<br/>');
    } else if (i % 5 === 0) {
        $('html').append("Buzz").append('<br/>');
    } else {
        $('html').append(i).append('<br/>');
    }

    }
  };

  function getNumber() {
    highNumber = prompt('Choose a high number to use in the FizzBuzz game: ');
    highNumber = parseInt(highNumber + 'a');
    console.log(highNumber);
  };
  
 
  // run getNumber function first time
  getNumber();

  // validate highNumber is a number
  // if not, re-prompt
  while (isNaN(highNumber)) {
    alert('You didn\'t enter a number. Please try again.');
    getNumber();  
  }


  fizzBuzz(highNumber);
  
});

