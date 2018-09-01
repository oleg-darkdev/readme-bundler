const cl = require('node-cl-log'),
      fs = require('fs');


// check for the presence of the necessary language module
function checkingExistenceDirectory (pathDocsDir) {
  let dirLanguageModuleFounded = false,
      language = '';

  fs.readdir(pathDocsDir, function (err, items) {
    items.forEach((el, ind) => {
      if (el == language.toUpperCase()) dirLanguageModuleFounded = true;
    });
  });
  if (dirLanguageModuleFounded != false) {
    fs.mkdirSync(`${pathDocsDir + language.toUpperCase()}`);
    // cl.log('create dir')
  };
};


module.exports = checkingExistenceDirectory;
