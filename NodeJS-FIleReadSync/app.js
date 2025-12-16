/// 1.

// const fs = require("fs");
// console.log("1. Huselt ilgeeh");

// fs.writeFileSync("task1.txt", "Hello Sync World!");
// console.log("2. Huselt amjilttai");

// /// 2.

// console.log("readFileSync ajilluulj baina");

// const data = fs.readFileSync("task1.txt", "utf-8");
// console.log("Result", data);
// console.log("Success");

/// 3.

// console.log("appendFileSync эхлүүлж байна");

// fs.appendFileSync("task1.txt", "Added by Sync");
// console.log("Амжилттай нэмэгдлээ");

/// 4.

// console.log("Файлыг устгах гэж байна");

// fs.unlinkSync("task1.txt");
// console.log("Файл амжилттай устгагдлаа");

/// 5.

const fs = require("fs");
console.log("Sync-г эхлүүлж байна");

fs.mkdir("Folder", (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Created Successfully");
  }
});

fs.writeFileSync("./Folder/task.txt", "Hello Sync World");
console.log("Амжилттай бичигдлээ");

fs.appendFileSync("./Folder/task.txt", " Added by Sync");
console.log("Файлд амжилттай нэмлээ");

const data = fs.readFileSync("./Folder/task.txt", "utf-8");
console.log("Үр дүн:", data);

console.log('Sync дууслаа"');
