const sys = require('sys'),
  exec = require('child_process').exec;
  // fs = require('extfs');
const path = require('../../src/lib/path');

function puts(error, stdout, stderr) { sys.puts(stdout) }

function clear(pathDirClean) {
  if (fs.existsSync(pathDirClean)) {
    fs.readdirSync(pathDirClean).forEach(function (file, index) {
      let curPath = pathDirClean + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
  };
};


describe("Cli russian language", function () {
  it("Start generate the russian templates on docs directory", function () {
    clear(path.src.docs.ru);
    exec('npm run doc:ru', puts);
    // let resultFoundFilesOnDir = res(path.src.docs.ru);
    // let emtyFile = fs.isEmpty(path.src.docs.ru, function (empty) {
    //   // empty;
    //   console.log(empty);
    //   // resultFoundFilesOnDir  = empty;
    // });

    // expect(resultFoundFilesOnDir).toBeTruthy();
  });
  // it("Start generate the russian readme file", function() {
  //   clear(path.build.readme.ru);
  //   exec('npm run readme:ru', puts);
  // });
  // it("Start generate the russian html file", function() {
  //   clear(path.build.html.ru);
  //   exec('npm run html:ru', puts);
  // });
});

// describe("Cli english language", function() {
//   it("Start generate the englishtemplates on docs directory", function() {
//     clear(path.src.docs.en)
//     exec('npm run doc:en', puts);
//   });
//   it("Start generate the english readme file", function() {
//     clear(path.build.readme.en);
//     exec('npm run readme:en', puts);
//   });
//   it("Start generate the english html file", function() {
//     clear(path.build.html.en);
//     exec('npm run html:en', puts);
//   });
// });

// describe("Cli Belarusian language", function() {
//   it("Start generate the Belarusian templates on docs directory", function() {
//     clear(path.src.docs.by)
//     exec('npm run doc:by', puts);
//   });
//   it("Start generate the Belarusianreadme file", function() {
//     clear(path.build.readme.by);
//     exec('npm run readme:by', puts);
//   });
//   it("Start generate the Belarusian html file", function() {
//     clear(path.build.html.by);
//     exec('npm run html:by', puts);
//   });
// });


// describe("Cli Ukraine language", function() {
//   it("Start generate the Ukraine templates on docs directory", function() {
// clear(path.src.docs.ua)
//     exec('npm run doc:ua');
//   });
//   it("Start generate the Ukraine readme file", function() {
// clear(path.build.readme.ua);
//     exec('npm run readme:ua');
//   });
//   it("Start generate the Ukraine html file", function() {
// clear(path.build.html.ua);
//     exec('npm run html:ua');
//   });
// });


// describe("Cli Polyakcha language", function() {
//   it("Start generate the Polyakcha templates on docs directory", function() {
// clear(path.src.docs.pl)
// clear(path.build.readme.pl);
//     exec('npm run doc:pl');
//   });
//   it("Start generate the Polyakcha readme file", function() {
//     exec('npm run readme:pl');
//   });
//   it("Start generate the Polyakcha html file", function() {
// clear(path.build.html.pl);
//     exec('npm run html:pl');
//   });
// });



// describe("ss", function() {
//   it("ss", function() {
//     console.log(' yess')
//   });
// });
/*
//   Lists names files on any languages.
// */
// // const fileBel = require('../../src/js/lib/listFiles/listFilesBel'),
// //       fileUa = require('../../src/js/lib/listFiles/listFilesUa'),
// //       filePl = require('../../src/js/lib/listFiles/listFilesPl'),
// //       fileEn = require('../../src/js/lib/listFiles/listFilesEn'),

// // const fileRu = require('../../src/js/lib/listFiles/ru');

// // describe("Files in directory docs", function () {
// //   it("docs/description.html - generation the html description", function () {
// //     setTimeout(function () {
// //       gen.html()
// //     }, 1000);
// //     fs.watchFile(path.build.html, function (curr, prev) {
// //       expect(curr.nlink != prev.nlink).toBe(true)
// //     });
// //   });
// //   it("Synchronization modules in docs folder", function () {
// //     setTimeout(function () {
// //       gen.docs()
// //     }, 1000);
// //     fs.watch(path.src.docs.ru, (eventType, filename) => {
// //       expect(eventType).toBe(true)
// //     });
// //   });
// // });

// // describe("File README", function () {
// //   it("Edit file README[RU].md", function () {
// //     setTimeout(function () {
// //       gen.readme()
// //     }, 1000);
// //     fs.watchFile(path.build.readme.ru, function (curr, prev) {
// //       expect(curr.nlink != prev.nlink).toBe(true)
// //     });
// //   });
// // });



// /*
// 	Общее API
// */
// // describe определение набора тестов, наборы могут быть вложенными
// // it определение теста внутри любого набора тестов
// // expect определяет ожидания, которые проверяются в тесте
// // xdescribe отключение набора тестов
// // xit отключение теста внутри любого набора тестов
// /*
// 	Методы для expect()
// */
// // .toBe() - сравнение с использованием ===
// // .not.toBe() - отрицание !=
// // .toEqual() - сравнение переменных и объектов (включая содержимое)
// // .toBeDefined() - значение должно быть определено
// // .toBeUndefined() - значение должно быть не определено
// // .toBeNull() - значение должно быть null
// // .toBeTruthy() - значение должно быть верно
// // .toBeFalsy() - значение должно быть не верно
// // .toBeLessThan() - значение должно быть меньше чем
// // .toBeGreaterThan() - значение должно быть больше чем
// // .toBeCloseTo() - значение должно быть близко к числу
// // .toMatch() - значение должно соответствовать регулярному выражению
// // .toContain() - значение должно содержать
// // .toThrow() - должно быть вызвано исключение
