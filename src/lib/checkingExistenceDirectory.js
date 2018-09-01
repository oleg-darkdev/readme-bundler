const cl = require('node-cl-log'),
      fs = require('fs');


// проверка наличия дирректории необходимого языкового модуля
function checkingExistenceDirectory (pathDocsDir) {
  let dirLanguageModuleFounded = false;

  fs.readdir(pathDocsDir, function (err, items) {
    items.forEach((el, ind) => {
      if (el == language.toUpperCase()) dirLanguageModuleFounded = true;
    });
  });
  if (dirLanguageModuleFounded != false) {
    fs.mkdirSync(`${pathDocsDir + language.toUpperCase()}`);
    // cl.whi('create dir')
  };
};


module.exports = checkingExistenceDirectory;