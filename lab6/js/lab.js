/*
 * Author: Cassie Hicks
 * Created: April 25, 2022
 */

myTransport = ["walking", "bus"];

myMainRide = {
  make: "Ford",
  model: "Mustang",
  color: "White",
  year: 1965,
  age: function () {
    return 2022-year;
}
}

document.writeln("How I actually get around: " + myTransport + "</br>");
document.writeln("My Main <i> Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
