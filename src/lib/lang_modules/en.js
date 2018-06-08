const Gen = require('../gen');
// пути для генерации файлов
const path = require('../path');
// порядок очереди файлов при генерации файла README
const filesListEn = require('../orderFiles/en');
/*
  @description Предназначен для сборки файлов с суффиксом [EN] в названии файла.
  @param { pathSrcSource } - исходный код блоков библиотеки
  @param { pathSrcDocs } - путь куда они будут синхронизированы
  @param { pathSrcMan } - описание назначения исходных блоков библиотеки
  @param { pathOrderFiles } - порядок файлов для сборки файла README
  @param { pathBuildMd } - файл для презентации блоков и их последовательности в формате *.md
  @param { pathBuildHtml } - файл для презентации блоков и их последовательности в формате *.html
  @param { pathBuildReadme } - окончательный README файл проекта с внесенными вами правками в блоки.
*/
const langModule = new Gen(
                        path.src.source.en,
                        path.src.docs.en,
                        path.src.man.en ,
                        path.src.order.en,
                        path.build.md.en,
                        path.build.html.en,
                        path.build.readme.en);

module.exports = langModule;
