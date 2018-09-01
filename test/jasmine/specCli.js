var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }


describe("Cli russian language", function() {
  it("Start generate the russian templates on docs directory", function() {
    exec('npm run doc:ru', puts);
  });
  it("Start generate the russian readme file", function() {
    exec('npm run readme:ru', puts);
  });
  it("Start generate the russian html file", function() {
    exec('npm run html:ru', puts);
  });
});

describe("Cli english language", function() {
  it("Start generate the englishtemplates on docs directory", function() {
    exec('npm run doc:en', puts);
  });
  it("Start generate the english readme file", function() {
    exec('npm run readme:en', puts);
  });
  it("Start generate the english html file", function() {
    exec('npm run html:en', puts);
  });
});

describe("Cli Belarusian language", function() {
  it("Start generate the Belarusian templates on docs directory", function() {
    exec('npm run doc:by', puts);
  });
  it("Start generate the Belarusianreadme file", function() {
    exec('npm run readme:by', puts);
  });
  it("Start generate the Belarusian html file", function() {
    exec('npm run html:by', puts);
  });
});


// describe("Cli Ukraine language", function() {
//   it("Start generate the Ukraine templates on docs directory", function() {
//     exec('npm run doc:ua');
//   });
//   it("Start generate the Ukraine readme file", function() {
//     exec('npm run readme:ua');
//   });
//   it("Start generate the Ukraine html file", function() {
//     exec('npm run html:ua');
//   });
// });


// describe("Cli Polyakcha language", function() {
//   it("Start generate the Polyakcha templates on docs directory", function() {
//     exec('npm run doc:pl');
//   });
//   it("Start generate the Polyakcha readme file", function() {
//     exec('npm run readme:pl');
//   });
//   it("Start generate the Polyakcha html file", function() {
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
