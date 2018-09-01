/*
  @description Файл конфигурации путей.
  @property  { string } ru,en,by и другие - пути для конкретных языковых версий файлов
  @property  { string } path.src.source - исходные шаблоны документов
  @property  { string } path.src.docs - путь куда будут синхронизированы шаблоны документов
  @property  { string } path.src.man -  описание шаблонов документов (их назначения, функций, особенностей)
  @property  { string }  path.src.order - порядок файлов для сборки файла README
  @property  { string } path.build.md - файл для презентации внешнего вида документов и их последовательности в формате *.md
  @property  { string } path.build.html  - файл для презентации  внешнего вида документов и их последовательности в формате *.html
  @property  { string }  path.build.readme  - окончательный README файл проекта с внесенными вами правками в блоки.
*/
const path = {
  src: {
      source: {
        ru: './src/data/RU/content/',
        by: './src/data/BY/content/',
        ua: './src/data/UA/content/',
        pl: './src/data/PL/content/',
        en: './src/data/EN/content/'
      },
      man: {
        ru: './src/data/RU/description/',
        by: './src/data/BY/description/',
        ua: './src/data/UA/description/',
        pl: './src/data/PL/description/',
        en: './src/data/EN/description/'
      },
      order: {
        ru: './order_files/ru.js',
        by: './order_files/by.js',
        ua: './order_files/ua.js',
        pl: './order_files/pl.js',
        en: './order_files/en.js'
      },
      docs: {
        ru: './docs/RU/',
        by:'./docs/BY/',
        ua: './docs/UA/',
        pl: './docs/PL/',
        en: './docs/EN/'
      },
      langModules: {
        dir: './src/lib/lang_modules/',
        ru: './src/lib/lang_modules/ru.js',
        by: './src/lib/lang_modules/by.js',
        ua: './src/lib/lang_modules/ua.js',
        pl: './src/lib/lang_modules/pl.js',
        en: './src/lib/lang_modules/en.js'
      }
  },
  build: {
      readme: {
        ru: './README[RU].md',
        by: './README[BY].md',
        ua: './README[UA].md',
        pl: './README[PL].md',
        en: './README[EN].md'
      },
      html: {
        ru: './docs/description[RU].html',
        by: './docs/description[BY].html',
        ua: './docs/description[UA].html',
        pl: './docs/description[PL].html',
        en: './docs/description[EN].html'
      },
      md: {
        dir: './docs/',
        ru: './docs/description[RU].md',
        by: './docs/description[BY].md',
        ua: './docs/description[UA].md',
        pl: './docs/description[PL].md',
        en: './docs/description[EN].md'
      }
  }
};

// common style modules for jasmine tests
module.exports = path;
