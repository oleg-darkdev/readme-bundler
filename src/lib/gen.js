const fs = require('fs'),
      md2html = require('node-m2h');
      cl = require('node-cl-log');
/*
  @description Модуль для сборки файлов для создания модулей на разных языках, в зависимости от переданной генератору конфигурации
  в качестве аргумента.
  @param { array } arrayPaths -  массив в виде конфигурации для настройки языкового модуля.
  @property { string } pathSrcSource - исходные шаблоны документов
  @property { string } pathSrcDocs - путь куда будут синхронизированы шаблоны документов
  @property { string } pathSrcMan - описание шаблонов документов (их назначения, функций, особенностей)
  @property { string } pathOrderFiles - порядок файлов для сборки файла README
  @property { string } pathBuildMd - файл для презентации внешнего вида документов и их последовательности в формате *.md
  @property { string } pathBuildHtml - файл для презентации  внешнего вида документов и их последовательности в формате *.html
  @property { string } pathBuildReadme - окончательный README файл проекта с внесенными вами правками в шаблоны документов в дирректории "docs/".
  @property { string } pathFileListOrder - порядок очереди шаблонов документов для readme и html файлов
  @see lang_modules/{ru.js or en.js or others language}
*/

class Gen {
  constructor(arrayPaths) {
    this.pathSrcSource = arrayPaths[0];
    this.pathSrcDocs = arrayPaths[1];
    this.pathSrcMan = arrayPaths[2];
    this.pathSrcOrder = arrayPaths[3];
    this.pathBuildMd = arrayPaths[4];
    this.pathBuildHtml = arrayPaths[5];
    this.pathBuildReadme = arrayPaths[6];
    this.filesList = arrayPaths[7];
  }
  /*
    @description Очистка дирректории docs/langModule от шаблонов формата *.md
    @property { string } pathDirClean  - дирректория в которой будут находиться файлы
  */
  cleanMd() {
    const pathDirClean = this.pathSrcDocs;

    if (fs.existsSync(pathDirClean)) {
      fs.readdirSync(pathDirClean).forEach(function (file, index) {
        let curPath = pathDirClean + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
    };
  }
  /*
    @description Удаление файла README[..].md лежащего в корне проекта
    @property { string } pathDirClean  - дирректория в которой будет находиться искомый файл
  */
  cleanReadme() {
    const pathDirClean = this.pathBuildReadme;

    if (fs.existsSync(pathDirClean)) {
      fs.readdirSync(pathDirClean).forEach(function (file, index) {
        let curPath = pathDirClean + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
    };
  }
  /*
    @description Удаление файла описание в формате description[..].html в директории docs
    @property { string } pathDirClean  - дирректория в которой будет находиться искомый файл
  */
  cleanHtml() {
    const pathDirClean = this.pathBuildHtml;

    if (fs.existsSync(pathDirClean)) {
      fs.readdirSync(pathDirClean).forEach(function (file, index) {
        let curPath = pathDirClean + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
    };
  }
  /*
    @description Обновление файлов до актуально версии в директорию docs
    @property { string } source - откуда будут взяты исходные шаблоны документов
    @property { string } docs - путь куда будут синхронизированы шаблоны документов
    @returns копирует исходные шаблоны документов в дирректорию docs/ + выбранный языковой модуль
  */
  genDocs() {
    const source = this.pathSrcSource,
          docs = this.pathSrcDocs;

    fs.readdir(source, function (err, items) {
      // cl.log(items);
      items.forEach(file => {
        fs.copyFileSync(source + file, docs + file, (err) => {
          if (err) cl.red(`File ${file} not copied `);
          if (!err) cl.gre(`${file} was copied `);
        });
      }); // end forEach
    });
    cl.gre(`End geneneration the templates on directory ${docs}`)
  } // end genDocs

  /*
    @description Генерация наглядного примера из каких шаблонов документов, в какой последовательности
    будет сгенерирован файл README в формате *.html.
    @property { string } sourceMan - путь к файлам описания шаблонов документов
    @property { string } htmlArr - массив эл-тов в нужном порядке для бандла
    @property { string } buildMd - путь к файлу бандла документов в формате "*.md"
    @property { string } buildHtml - путь к файлу презентации внешнего вида документов в формате
    @property { string } pathFileListOrder - файл в котором указан порядок сборки файлов для "*.html"
    @returns файл-бандл в формате "*.html" с подключенными стилями для текущего языкового модуля из конфигурации
  */
  genHtml() {
    const sourceMan = this.pathSrcMan,
      htmlArr = [],
      buildMd = this.pathBuildMd,
      buildHtml = this.pathBuildHtml,
      filesList = this.filesList;

    fs.readdir(sourceMan, function (err, items) {
      // create new array with elements in the necessary order
      filesList.forEach(el => {
        htmlArr.push(items[items.indexOf(el)])
      });
      // cl.log(htmlArr);
      htmlArr.forEach(el => {
        fs.readFile(sourceMan + el, function (err, data) {
          if (err) {
            cl.log(err);
          } else {
            fs.open(buildMd, "w+", function (err, fileHandle) {
              if (!err) {
                fs.appendFile(buildMd, data, function (err) {
                  if (err) throw err;
                });
                md2html(buildMd, buildHtml, {
                  breaks: true,
                  maxdepth: 2,
                  title: 'Example README file'
                });
              } else {
                cl.log('An error occurred while creating');
              }
            });
          };
        });
      });
    });
  } // end genHtml
  /*
    @description Обновление файла README
    @property { string } readmeArr - массив эл-тов в нужном порядке для бандла
    @property { string } srcDocs - путь куда будут синхронизированы шаблоны документов ( дирректория "docs/")
    @property { string } buildReadme - путь к главному файлу документации формате "*.md" ( бандлу всех документов из директории "docs/")
    @property { string } pathFileListOrder - файл в котором указан порядок сборки файлов для readme
    @returns файл-бандл в формате "*.md" для текущего языкового модуля из конфигурации
  */
  genReadme() {
    const readmeArr = [],
      srcDocs = this.pathSrcDocs,
      buildReadme = this.pathBuildReadme,
      filesList = this.filesList;

    const languageFileList = require(filesList);


    fs.readdir(srcDocs, function (err, items) {
      // create new array with elements in the necessary order
        languageFileList.forEach(el => {
          readmeArr.push(items[items.indexOf(el)])
        });

        // cl.log('Files that will appear in the README file, in the order of the queue:');
        // cl.log(readmeArr)

        readmeArr.forEach(templateFile => {
          // cl.log('Getting started work with an array of files');
          // cl.log(srcDocs + templateFile)
          // cl.log();
          fs.open(buildReadme, "w+", function (err, fileHandle) {
            if (!err) {
              fs.appendFile(buildReadme, fs.readFileSync(srcDocs + templateFile, 'utf8') , function (err) {
                if (err) cl.red(`File ${srcDocs + templateFile} was not found!`)
              });
            } else {
                cl.red(`There was an error creating ${buildReadme}`);
              };
          });
        });
      }); // end  fs.readdir
  }; // end genReadme
}; // end class Gen

module.exports = Gen;
