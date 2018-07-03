const fs = require('fs'),
  gen = require('../../index'),
  path = require('../../src/js/lib/path.js');
const { spawn } = require('child_process');




describe("Cli", function() {
  it("", function() {
    function run_cmd(cmd, args, callBack) {
        const child = spawn(cmd, args);

        let resp = "";
        child.stdout.on('data', function (buffer) { resp += buffer.toString() });
        child.stdout.on('end', function() { callBack (resp) });
        child.stdout.on('error', callBack);
    };

    run_cmd("./go.js", "-l", function(err, text) {
       if (err) return console.error(err);

       console.log(text)
    });
  });
});





// describe("", function() {
//   it("", function() {

//   });
// });
/*
  Lists names files on any languages.
*/
// const fileBel = require('../../src/js/lib/listFiles/listFilesBel'),
//       fileUa = require('../../src/js/lib/listFiles/listFilesUa'),
//       filePl = require('../../src/js/lib/listFiles/listFilesPl'),
//       fileEn = require('../../src/js/lib/listFiles/listFilesEn'),

const fileRu = require('../../src/js/lib/listFiles/ru');

describe("Files in directory docs", function () {
  it("docs/description.html - generation the html description", function () {
    setTimeout(function () {
      gen.html()
    }, 1000);
    fs.watchFile(path.build.html, function (curr, prev) {
      expect(curr.nlink != prev.nlink).toBe(true)
    });
  });
  it("Synchronization modules in docs folder", function () {
    setTimeout(function () {
      gen.docs()
    }, 1000);
    fs.watch(path.src.docs.ru, (eventType, filename) => {
      expect(eventType).toBe(true)
    });
  });
});

describe("File README", function () {
  it("Edit file README[RU].md", function () {
    setTimeout(function () {
      gen.readme()
    }, 1000);
    fs.watchFile(path.build.readme.ru, function (curr, prev) {
      expect(curr.nlink != prev.nlink).toBe(true)
    });
  });
});



/*
	Общее API
*/
// describe определение набора тестов, наборы могут быть вложенными
// it определение теста внутри любого набора тестов
// expect определяет ожидания, которые проверяются в тесте
// xdescribe отключение набора тестов
// xit отключение теста внутри любого набора тестов
/*
	Методы для expect()
*/
// .toBe() - сравнение с использованием ===
// .not.toBe() - отрицание !=
// .toEqual() - сравнение переменных и объектов (включая содержимое)
// .toBeDefined() - значение должно быть определено
// .toBeUndefined() - значение должно быть не определено
// .toBeNull() - значение должно быть null
// .toBeTruthy() - значение должно быть верно
// .toBeFalsy() - значение должно быть не верно
// .toBeLessThan() - значение должно быть меньше чем
// .toBeGreaterThan() - значение должно быть больше чем
// .toBeCloseTo() - значение должно быть близко к числу
// .toMatch() - значение должно соответствовать регулярному выражению
// .toContain() - значение должно содержать
// .toThrow() - должно быть вызвано исключение
