const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;

const batchBash = "npm install";

const currentPath = path.resolve(process.cwd(), "../");
console.log(`batch update path:'${currentPath}'`);
let files = fs.readdirSync(currentPath).filter(each => each.startsWith("sdm-"));

const skipFolders = ["sdm-ui-integration", "sdm-ui-all"]; //过滤

console.log(`batch execulting command : '${batchBash}'\n`);
process.chdir(currentPath);

files.forEach(file => {
  console.log("file: " + file);
  let fPath = path.join(currentPath, file);
  const filterFlag = skipFolders.includes(file) || /^\./.test(file);
  let bash = ` cd ${fPath} && ${batchBash}`;
  console.log("bash: " + bash);
  if (!filterFlag) {
    exec(bash, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        process.exit();
      } else {
        console.log(stdout);
      }
    });
  } else {
    console.log("skip folders: " + fPath);
  }
});
