/*
 * Author: Cassie Hicks
 * Created: April 27, 2022
 */


function userNameShuffle() {
    //Get user input.
  var userName = window.prompt();
    //Sort the letters by splitting, sorting, and joining the letters again.
  sortedLetters = userName.toLowerCase().split("").sort().join("");
    //Return the sorted name.
  return sortedLetters;
  }

document.writeln("And now your name is more 'unique': ",
      userNameShuffle(), "</br>")
