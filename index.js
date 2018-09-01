'use strict';

const cl = require('node-cl-log'),
      fs = require('fs'),
      path = require('./src/lib/path'),
      checkingExistenceDirectory = require('./src/lib/checkingExistenceDirectory');

const pathDirLanguageModules = path.src.langModules.dir,
      pathDocsDir = path.build.md.dir,
      minArguments = 3;

// params for print help
const firstParam = require('./src/lib/help/helpFirstParams.js'),
      secondParam = require('./src/lib/help/helpSecondParams.js');

if (process.argv.length <= minArguments) {
  cl.log("Usage: ");
  for (let param in firstParam) {
    cl.log(firstParam[param]);
  }  cl.log('\n');
  for (let param in secondParam) {
    cl.log(secondParam[param]);
  }  process.exit(-1);
} else if (process.argv.length > minArguments) {
  fs.readdir(pathDirLanguageModules, function (err, langDir) {
    let resultFoundLanguageModule = '',
        [generationType, language] = [process.argv[2], process.argv[3].slice(1, 3)];
    // // cl.log(`The following language muzzles are available ${langDir}`);
    langDir.forEach((el, ind) => {
      el = el.slice(0, 2);
      if (el == language) {
        resultFoundLanguageModule = langDir[ind];
        cl.log(`An argument was given for the language ${resultFoundLanguageModule}`);
      }
      if (ind == langDir.length) {
        cl.red('Warning! Dont find language module!');
        for (let param in secondParam) {
          cl.cya(secondParam[param]);
        }
        process.exit(-1);
      }
    });

    if (resultFoundLanguageModule) {
      // cl.gre('import module !')
      // import the language module chosen by the user
      const languageModule = require(`${pathDirLanguageModules + resultFoundLanguageModule}`);

      if (generationType == '-d') {
        checkingExistenceDirectory(pathDocsDir);
        // cl.log('Clone the basic templates on "./docs" directory');
        languageModule.genDocs();
        // for(var key in languageModule) {
        //   cl.log(key + " : " + languageModule[key]);
        // }
        // cl.log(languageModule);
      } else if (generationType == '-r') {
        // cl.gre('Generate the readme file');
        languageModule.genReadme();
      } else if (generationType == '-h') {
        // cl.gre('Generate the readme file');
        languageModule.genHtml();
      } else {
        cl.red('The wrong argument, all list of arguments is transferred:');
      }
    }  }); // end fs.readdir
} // end if
//# sourceMappingURL=index.js.map
