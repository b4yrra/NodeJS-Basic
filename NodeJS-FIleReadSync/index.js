/// 1.

// const fs = require("fs");
// console.log("Creating File");

// fs.writeFileSync("task1.txt", "Sync Task 1");
// console.log("Created Successfully");

// /// 2.
// console.log("Reading File");

// const data = fs.readFileSync("task1.txt", "utf-8");
// console.log("Result:", data);
// console.log("Read Successfully");

// /// 3.
// console.log("Appending text");

// fs.appendFileSync("task1.txt", " Added from task 3");
// console.log("Added Successfully");

/// 4.
// console.log("Deleting File");

// fs.unlinkSync("no_file.txt");

/// 5.

const fs = require("fs");

console.log("Start");

fs.writeFileSync("task2.txt", "New File");

console.log("After Write");

fs.appendFileSync("task2.txt", " Add task");

console.log("After Append");

const data = fs.readFileSync("task2.txt", "utf-8");

console.log("After read :", data);

console.log("End");
