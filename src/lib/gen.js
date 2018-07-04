
const fs = require('fs'),
  md2html = require('node-m2h');
  cl = require('node-cl-log');

const filesListRu = require('./orderFiles/ru');

/*
    TODO:
      * в генерированный html файл сохранить utf только для русского и англиского.
*/

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
          if (err) throw err;
          //if (!err) cl.gre(`${file} was copied `);
        });
      }); // end forEach
    });
    cl.gre('end genDocs')
  } // end genDocs
  /*
    @description Генерация наглядного примера из каких шаблонов документов, в какой последовательности
    будет сгенерирован файл README в формате *.html.
    @property { string } sourceMan - путь к файлам описания шаблонов документов
    @property { string } htmlArr - массив эл-тов в нужном порядке для бандла
    @property { string } buildMd - путь к файлу бандла документов в формате "*.md"
    @property { string } buildHtml - путь к файлу презентации внешнего вида документов в формате "*.html"
    @returns файл-бандл в формате "*.html" с подключенными стилями для текущего языкового модуля из конфигурации
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
  /*
    @description Обновление файла README
    @property { string } readmeArr - массив эл-тов в нужном порядке для бандла
    @property { string } srcDocs - путь куда будут синхронизированы шаблоны документов ( дирректория "docs/")
    @property { string } buildReadme - путь к главному файлу документации формате "*.md" ( бандлу всех документов из директории "docs/")
    @returns файл-бандл в формате "*.md" для текущего языкового модуля из конфигурации
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
      // cl.log(' архив с файлами по очереди заполнен')


      readmeArr.forEach(el => {
        // cl.log(' работа с архивом ')

        fs.readFileSync(srcDocs + el, function (err, data) {
          if (err) {
            cl.log(err);
          }
          else {
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
