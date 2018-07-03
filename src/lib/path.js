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
        ru: './src/lib/orderFiles/ru.js',
        by: './src/lib/orderFiles/by.js',
        ua: './src/lib/orderFiles/ua.js',
        pl: './src/lib/orderFiles/pl.js',
        en: './src/lib/orderFiles/en.js'
      },
      docs: {
        ru: './docs/',
        by:'./docs/BY/',
        ua: './docs/UA/',
        pl: './docs/PL/',
        en: './docs/EN/'
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
        ru: './docs/description[RU].md',
        by: './docs/description[BY].md',
        ua: './docs/description[UA].md',
        pl: './docs/description[PL].md',
        en: './docs/description[EN].md'
      }
  }
};
// export default path ;
// common for jasmine tests
module.exports = path;
