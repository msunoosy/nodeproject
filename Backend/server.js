const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile("./start.txt", "utf8");
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "testwring.txt"),
      "writing is working here"
    );
    console.log("writing completed");
    await fsPromises.appendFile(
      path.join(__dirname, "testwring.txt"),
      "\n\nupdating is working"
    );
    console.log("append completed");
    await fsPromises.rename(
      path.join(__dirname, "testwring.txt"),
      path.join(__dirname, "testingrenamed.txt")
    );
    console.log("rename completed");
  } catch (err) {
    console.error(err);
  }
};

fileOps();
