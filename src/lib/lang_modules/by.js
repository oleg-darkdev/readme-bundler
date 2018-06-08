const Gen = require( '../gen');
// пути для генерации файлов
const path = require( '../path');
// порядок очереди файлов при генерации файла README
const filesListBy = require( '../orderFiles/by');
/*
  @description Предназначен для сборки файлов с суффиксом [BY] в названии файла.
  @param { pathSrcSource } - исходный код блоков библиотеки
  @param { pathSrcDocs } - путь куда они будут синхронизированы
  @param { pathSrcMan } - описание назначения исходных блоков библиотеки
  @param { pathOrderFiles } - порядок файлов для сборки файла README
  @param { pathBuildMd } - файл для презентации блоков и их последовательности в формате *.md
  @param { pathBuildHtml } - файл для презентации блоков и их последовательности в формате *.html
  @param { pathBuildReadme } - окончательный README файл проекта с внесенными вами правками в блоки.
*/
const langModule = new Gen(
                    path.src.source.by,
                    path.src.docs.by,
                    path.src.man.by ,
                    path.src.order.by,
                    path.build.md.by,
                    path.build.html.by,
                    path.build.readme.by);

module.exports = langModule;
