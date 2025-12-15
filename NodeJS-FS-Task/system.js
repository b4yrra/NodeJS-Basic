const fs = require("fs");

/// 1.

// fs.mkdir("./myFolder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder Created Successfully");
//   }
// });

// data = "Hello, NodeJS";

// fs.writeFile("./myFolder/message.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Created Successfully");
//   }
// });

// /// 2.

// fs.readFile("./myFolder/message.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File read successfully! here is the data");
//     console.log(data);
//   }
// });

// /// 3.

// const content = "Unuudur saihan udur";

// fs.appendFile("./myFolder/message.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully");
//   }
// });

/// 4.

// fs.unlink("./myFolder/message.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("");
//   }
// });

/// 5.

// fs.mkdir("data", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Create Successfully.");
//   }
// });

const data = "Ene bol ugugdul";

fs.writeFile("data/info.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Create file successfully.");
  }
});
