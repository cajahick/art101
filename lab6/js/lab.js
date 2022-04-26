/*
 * Author: Cassie Hicks
 * Created: April 25, 2022
 */

var myTransport = ["walking", "bus"];
var myMainRide = {
  make: "Ford",
  model: "Mustang",
  color: "White",
  year: 1965,
  age: return 2022 - myMainRide.year;
};

document.writeIn("How I actually get around: ", myTransport, "</br>");
document.writeIn("My Main <i> Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
