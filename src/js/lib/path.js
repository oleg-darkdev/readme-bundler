/*
  @description Файл конфигурации путей.
  @param { path.src.source } - исходный код блоков библиотеки
  @param { path.src.docs } - путь куда они будут синхронизированы
  @param { path.src.man } - описание назначения исходных блоков библиотеки
  @param { path.src.order } - порядок файлов для сборки файла README
  @param { path.build.md } - файл для презентации блоков и их последовательности в формате *.md
  @param { path.build.html } - файл для презентации блоков и их последовательности в формате *.html
  @param { path.build.readme } - окончательный README файл проекта с внесенными вами правками в блоки.
*/
const path = {
  src: {
      source: {
        ru: './src/js/data/RU/content/',
        BY: './src/js/data/BY/content/',
        ua: './src/js/data/UA/content/',
        pl: './src/js/data/PL/content/',
        en: './src/js/data/EN/content/'
      },
      man: {
        ru: './src/js/data/RU/description/',
        BY: './src/js/data/BY/description/',
        ua: './src/js/data/UA/description/',
        pl: './src/js/data/PL/description/',
        en: './src/js/data/EN/description/'
      },
      order: {
        ru: './src/js/lib/orderFiles/ru.js',
        BY: './src/js/lib/orderFiles/by.js',
        ua: './src/js/lib/orderFiles/ua.js',
        pl: './src/js/lib/orderFiles/pl.js',
        en: './src/js/lib/orderFiles/en.js'
      },
      docs: {
        ru: './docs/RU/',
        BY:'./docs/BY/',
        ua: './docs/UA/',
        pl: './docs/PL/',
        en: './docs/EN/'
      }
  },
  build: {
      readme: {
        ru: './README[RU].md',
        BY: './README[BY].md',
        ua: './README[UA].md',
        pl: './README[PL].md',
        en: './README[EN].md'
      },
      html: {
        ru: './docs/description[RU].html',
        BY: './docs/description[BY].html',
        ua: './docs/description[UA].html',
        pl: './docs/description[PL].html',
        en: './docs/description[EN].html'
      },
      md: {
        ru: './docs/description[RU].md',
        BY: './docs/description[BY].md',
        ua: './docs/description[UA].md',
        pl: './docs/description[PL].md',
        en: './docs/description[EN].md'
      }
  }
};
// export default path ;
// common for jasmine tests
module.exports = path;
