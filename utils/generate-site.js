const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.htms", fileContent, (err) => {
      // if there is an error, reject the Promise and send the error to the promis's '.catch()' method
      if (err) {
        reject(err);
        //return out of the function here to make sure the Promise doenst accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data tot he '.then()' method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./dist/style.css", fileContent, (err) => {
      if (err) {
        reject(err);
        return fs.copyFile();
      }
      resolve({
        ok: true,
        message: "File Copied",
      });
    });
  });
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};