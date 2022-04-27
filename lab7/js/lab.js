/*
 * Author: Cassie Hicks
 * Created: April 27, 2022
 */


function userNameShuffle() {
    //Get user input.
  var userName = window.prompt("What's your name?");
    //Sort the letters by splitting, sorting, and joining the letters again.
  sortedLetters = userName.toLowerCase().split("").sort().join("");
    //Return the sorted name.
  return sortedLetters;
  }

document.writeln("New Name: ",
      userNameShuffle(), "</br>")
