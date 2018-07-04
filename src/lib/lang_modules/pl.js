const Gen = require('../gen');
// пути для генерации файлов
const path = require('../path');
// порядок очереди файлов при генерации файла README
const filesListPl = require('../orderFiles/pl');
/*
  @description Предназначен для сборки файлов с суффиксом [PL] в названии файла.
  @param { pathSrcSource } - исходный код блоков библиотеки
  @param { pathSrcDocs } - путь куда они будут синхронизированы
  @param { pathSrcMan } - описание назначения исходных блоков библиотеки
  @param { pathOrderFiles } - порядок файлов для сборки файла README
  @param { pathBuildMd } - файл для презентации блоков и их последовательности в формате *.md
  @param { pathBuildHtml } - файл для презентации блоков и их последовательности в формате *.html
  @param { pathBuildReadme } - окончательный README файл проекта с внесенными вами правками в блоки.
*/
const pathConfig = [
  path.src.source.pl,
  path.src.docs.pl,
  path.src.man.pl,
  path.src.order.pl,
  path.build.md.pl,
  path.build.html.pl,
  path.build.readme.pl];

const langModule = new Gen(pathConfig);

module.exports = langModule;
