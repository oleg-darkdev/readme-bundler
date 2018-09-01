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
      fs = require('fs'),
      path = require('./src/lib/path'),
      checkingExistenceDirectory = require('./src/lib/checkingExistenceDirectory');

const pathDirLanguageModules = path.src.langModules.dir,
      pathDocsDir = path.build.md.dir,
      minArguments = 3;

const firstParam = require('./src/lib/help/helpFirstParams.js'),
      secondParam = require('./src/lib/help/helpSecondParams.js');


// let [generationType = '-r', language = 'en'] = [process.argv[2], process.argv[3].slice(1, 3)];

if (process.argv.length <= minArguments) {
  cl.log("Usage: ");
  for(let param in firstParam) {
    cl.log(firstParam[param])
  };
  cl.log('\n')
  for(let param in secondParam) {
    cl.log(secondParam[param])
  };
  process.exit(-1);
}


// else (process.argv.length > minArguments){
//   fs.readdir(pathDirLanguageModules, function (err, items) {
//     let resultFoundLanguageModule = '';
//     // cl.log(items);
//     // cl.log(language);
//     items.forEach((el, ind) => {
//       // cl.log(el = el.slice(0, 2));
//       el = el.slice(0, 2);
//       if (el == language) resultFoundLanguageModule = items[ind]
//     });
//     // if (resultFoundLanguageModule) {
//     //   // cl.gre('import module !')
//     //   // import the language module chosen by the user
//     //   const languageModule = require(`${pathDirLanguageModules + resultFoundLanguageModule}`);

//     //   // cl.log(languageModule);
//     //   // if (generationType == '-d') {

//     //   //   checkingExistenceDirectory(pathDocsDir);
//     //   //   cl.log('Clone the basic templates on "./docs" directory');
//     //   //   languageModule.genDocs();
//     //   //   // for(var key in languageModule) {
//     //   //   //   cl.log(key + " : " + languageModule[key]);
//     //   //   // }
//     //   //   // cl.log(languageModule);

//     //   // } else if (generationType == '-r') {
//     //   //   cl.gre('Generate the readme file');
//     //   //   languageModule.genReadme();
//     //   // }
//     //   // } else if (generationType == '-h') {
//     //   //   cl.gre('Generate the readme file');
//     //   //   languageModule.genHtml();
//     //   // };

//     //   // else if {
//     //   //   cl.red('The wrong argument, all list of arguments is transferred:')
//     //   // };
//     // }
//     //  else {
//     //   cl.red('Warning? Dont find language module!');
//     //   cl.log('end');
//     });
// }; // end fs.readdir

