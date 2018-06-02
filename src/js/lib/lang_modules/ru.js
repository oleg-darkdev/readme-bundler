import Gen from '../gen';
// пути для генерации файлов
import path from '../path';
// порядок очереди файлов при генерации файла README
import filesListRu from '../listFiles/ru';
/*
  @description Предназначен для сборки файлов с суффиксом [RU] в названии файла.
  @param { pathSrcSource } - исходный код блоков библиотеки
  @param { pathSrcDocs } - путь куда они будут синхронизированы
  @param { pathSrcMan } - описание назначения исходных блоков библиотеки
  @param { pathOrderFiles } - порядок файлов для сборки файла README
  @param { pathBuildMd } - файл для презентации блоков и их последовательности в формате *.md
  @param { pathBuildHtml } - файл для презентации блоков и их последовательности в формате *.html
  @param { pathBuildReadme } - окончательный README файл проекта с внесенными вами правками в блоки.
*/
const langModule = new Gen(path.src.source.ru,
                   path.src.docs.ru,
                   path.src.man.ru ,
                   path.build.md.ru,
                   path.build.html.ru,
                   path.build.readme.ru);

export default langModule;
