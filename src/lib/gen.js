/*
  @description Модуль для сборки файлов для создания модулей на разных языках.
*/
const fs = require( 'fs'),
      md2html = require('node-m2h');
      cl = require('node-cl-log');

const filesListRu = require('./orderFiles/ru');
/*
    TODO:
      * добавить передачу порядка файлов для генерации
      * в генерированный html файл сохранить utf только для русского и англиского.
*/

/*
  @description
  @param { pathSrcSource } - исходный код блоков библиотеки
  @param { pathSrcDocs } - путь куда они будут синхронизированы
  @param { pathSrcMan } - описание назначения исходных блоков библиотеки
  @param { pathOrderFiles } - порядок файлов для сборки файла README
  @param { pathBuildMd } - файл для презентации блоков и их последовательности в формате *.md
  @param { pathBuildHtml } - файл для презентации блоков и их последовательности в формате *.html
  @param { pathBuildReadme } - окончательный README файл проекта с внесенными вами правками в блоки.
*/
class Gen {
  // constructor(pathSrcSource, pathSrcDocs, pathSrcMan, pathSrcOrder, pathBuildMd, pathBuildHtml, pathBuildReadme) {
  constructor(arrayPaths) {
    this.pathSrcSource = arrayPaths[0];
    this.pathSrcDocs =  arrayPaths[1];
    this.pathSrcMan =  arrayPaths[2];
    this.pathSrcOrder =  arrayPaths[3];
    this.pathBuildMd =  arrayPaths[4];
    this.pathBuildHtml =  arrayPaths[5];
    this.pathBuildReadme =  arrayPaths[6];
  }
  /*
    @description Обновление файлов до актуально версии в директорию docs
  */
  genDocs() {
    const source = this.pathSrcSource,
          docs = this.pathSrcDocs;

    fs.readdir(source, function (err, items) {
      // cl.log(items);

      items.forEach(file => {
        fs.copyFileSync(source + file, docs + file, (err) => {
          if (err) throw err;
          // cl.gre(`${file} was copied `);
        });
      }); // end forEach
    });
    // cl.gre('end')
  } // end genDocs
  /*
    @description Генерация наглядного примера из каких блоков, в какой последовательности
    будет сгенерирован файл README в формате *.html.
  */
  genHtml() {
    const sourceMan = this.pathSrcMan,
          htmlArr = [],
          buildMd = this.pathBuildMd,
          buildHtml = this.pathBuildHtml;

    fs.readdir(sourceMan, function (err, items) {
      // create new array with elements in the necessary order
      filesListRu.forEach(el => {
        htmlArr.push(items[items.indexOf(el)])
      });
      // cl.log(htmlArr);
      htmlArr.forEach(el => {
        fs.readFile(sourceMan + el, function (err, data) {
          if (err) {
            cl.log(err);
          } else {
            // cl.log(data); // содержимое файла
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
                cl.log("Произошла ошибка при создании");
              }
            });
          };
        });
      });
    });
  } // end genHtml
  //
  /*
    @description Обновление файла README
  */
  genReadme() {
    const readmeArr = [],
          srcDocs = this.pathSrcDocs,
          buildReadme = this.pathBuildReadme;

    fs.readdir(srcDocs, function (err, items) {
      // create new array with elements in the necessary order
      filesListRu.forEach(el => {
        readmeArr.push(items[items.indexOf(el)])
      });
      // cl.log(readmeArr);
      readmeArr.forEach(el => {
        fs.readFile(srcDocs + el, function (err, data) {
          if (err) {
            cl.log(err);
          } else {
            // cl.log(data); // содержимое файла
            fs.open(buildReadme, "w+", function (err, fileHandle) {
              if (!err) {
                fs.appendFile(buildReadme, data, function (err) {
                  if (err) throw err;
                });
              } else {
                cl.red("Произошла ошибка при создании");
              };
            });
          };
        });
      });
    });
  } // end genReadme
}; // end class Gen

module.exports = Gen;
