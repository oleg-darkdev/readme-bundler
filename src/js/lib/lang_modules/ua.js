import Gen from '../gen';
// пути для генерации файлов
import path from '../path';
// порядок очереди файлов при генерации файла README
import filesListUa from '../listFiles/ua';
/*
  @description Предназначен для сборки файлов с суффиксом [UA] в названии файла.
  @param { pathSrcSource } - исходный код блоков библиотеки
  @param { pathSrcDocs } - путь куда они будут синхронизированы
  @param { pathSrcMan } - описание назначения исходных блоков библиотеки
  @param { pathOrderFiles } - порядок файлов для сборки файла README
  @param { pathBuildMd } - файл для презентации блоков и их последовательности в формате *.md
  @param { pathBuildHtml } - файл для презентации блоков и их последовательности в формате *.html
  @param { pathBuildReadme } - окончательный README файл проекта с внесенными вами правками в блоки.
*/
const langModule = new Gen(path.src.source.ua,
                   path.src.docs.ua,
                   path.src.man.ua,
                   path.src.order.ua,
                   path.build.md.ua,
                   path.build.html.ua,
                   path.build.readme.ua);

export default langModule;
