'use strict';

/*
	@description Для вызова доступны методы:
	ru.docs()
	ru.readme()
*/
// import ru from './lib/language_modules/ru';
/*
	@description Для вызова доступны методы:
	bel.docs()
	bel.readme()
*/
// import bel from './lib/language_modules/bel';
/*
	@description Для вызова доступны методы:
	en.docs()
	en.readme()
*/
// import en from './lib/language_modules/en';
/*
	@description Для вызова доступны методы:
	ua.docs()
	ua.readme()
*/
// import ua from './lib/language_modules/ua';
/*
	@description Для вызова доступны методы:
	pl.docs()
	pl.readme()
*/
// import pl from './lib/language_modules/pl';

/*
  TODO:
    добавить описание параметров в случае если их передано < 3
*/

// const languageModule = require('../src/lib/lang_modules/en.js');

const cl = require('node-cl-log'),
      fs = require('fs');

const pathDirLanguageModules = './src/lib/lang_modules/';
const pathDocsDir = './docs/';

let [generationType = '-r', language = 'en'] = [process.argv[2], process.argv[3].slice(1, 3)];

function checkingExistenceDirectory(pathDocsDir) {
  let dirLanguageModuleFounded = false;

  fs.readdir(pathDocsDir, function (err, items) {
    items.forEach((el, ind) => {
      if (el == language.toUpperCase()) dirLanguageModuleFounded = true;
    });
  });
  if (dirLanguageModuleFounded != false) {
    fs.mkdirSync(`${pathDocsDir + language.toUpperCase()}`);
    // cl.whi('create dir')
  }}
// 3 - minimum arguments
let minArguments = 3;
if (process.argv.length <= minArguments) {
  cl.log("Usage: " + __filename + " SOME_PARAM");
  process.exit(-1);
} else if (process.argv.length > minArguments) {
  fs.readdir(pathDirLanguageModules, function (err, items) {
    let resultFoundLanguageModule = false;
    // cl.log(items);
    // cl.log(language);
    items.forEach((el, ind) => {
      // cl.log(el = el.slice(0, 2));
      el = el.slice(0, 2);
      if (el == language) resultFoundLanguageModule = items[ind];
    });
    if (resultFoundLanguageModule) {
      // cl.gre('import module !')
      // import the language module chosen by the user
      const languageModule = require(`${pathDirLanguageModules + resultFoundLanguageModule}`);

      // cl.log(languageModule);
      if (generationType == '-d') {

        checkingExistenceDirectory(pathDocsDir);
        cl.log('Clone the basic templates on "./docs" directory');
        languageModule.genDocs();
        // for(var key in languageModule) {
        //   cl.log(key + " : " + languageModule[key]);
        // }
        // cl.log(languageModule);
      } else if (generationType == '-r') {
        cl.whi('');
        cl.gre('Generate the readme file');
        cl.whi('');
        languageModule.genReadme();
      }
      // else if (generationType == '-h') {
      //   // languageModule.genHtml();
      // }
      else {
          cl.red('The wrong argument, all list of arguments is transferred:');
        }    } else {
      cl.red(' Warning? Dont find language module!');
      cl.log();
      cl.log('end');
    }
  }); // end fs.readdir
} // end else if
//# sourceMappingURL=index.js.map
