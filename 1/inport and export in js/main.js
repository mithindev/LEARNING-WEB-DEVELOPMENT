// node package manager => npm
// package => files of code



var figlet = require("figlet");

figlet("Open Source", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});