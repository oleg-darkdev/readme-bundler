/*
  @description Модуль для сборки файлов для создания модулей на разных языках.
*/
import fs from 'fs';
import md2html from 'md-to-html';
// import filesListRu from './listFiles/ru';
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
  constructor(pathSrcSource, pathSrcDocs, pathSrcMan, pathSrcOrder, pathBuildMd, pathBuildHtml, pathBuildReadme) {
    this.pathSrcSource = pathSrcSource;
    this.pathSrcDocs = pathSrcDocs;
    this.pathSrcMan = pathSrcMan;
    this.pathSrcOrder = pathSrcOrder,
    this.pathBuildMd = pathBuildMd;
    this.pathBuildHtml = pathBuildHtml;
    this.pathBuildReadme = pathBuildReadme;
  }
  /*
    @description Обновление файлов до актуально версии в директорию docs
  */
  genDocs() {
    const source = this.pathSrcSource,
          docs = this.pathSrcDocs;

    fs.readdir(source, function (err, items) {
      // console.log(items);
      items.forEach(file => {
        fs.copyFileSync(source + file, docs + file, (err) => {
          if (err) throw err;
          // console.log(`${file} was copied `);
        });
      });
    });
  };
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
      // console.log(htmlArr);
      htmlArr.forEach(el => {
        fs.readFile(sourceMan + el, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            // console.log(data); // содержимое файла
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
                console.log("Произошла ошибка при создании");
              }
            });
          };
        });
      });
    });
    };
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
      // console.log(readmeArr);
      readmeArr.forEach(el => {
        fs.readFile(srcDocs + el, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            // console.log(data); // содержимое файла
            fs.open(buildReadme, "w+", function (err, fileHandle) {
              if (!err) {
                fs.appendFile(buildReadme, data, function (err) {
                  if (err) throw err;
                });
              } else {
                console.log("Произошла ошибка при создании");
              }
            });
          };
        });
      });
    });
  };
};

export default Gen;
