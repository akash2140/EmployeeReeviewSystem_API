const fs = require("fs");
const path = require("path");
const sass = require("sass");
module.exports = function scssToCss(src, dest) {
  return function (req, res, next) {
    const srcDir = path.resolve(src);
    const destDir = path.resolve(dest);
    fs.readdir(srcDir, (err, fileNames) => {
      if (err) {
        console.error(err);
        next();
        return;
      }
      let srcPath = "";
      let destPath = "";
      for (let file of fileNames) {
        srcPath = path.join(srcDir, file);
        if (path.extname(srcPath) == ".scss") {
          destPath = path.join(
            destDir,
            path.basename(file, path.extname(file)) + ".css"
          );
          let data = sass.renderSync({ file: srcPath });
          data = data.css.toString();
          fs.writeFile(destPath, data, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(destPath, "converted");
          });
        }
      }
    });
    next();
  };
};
