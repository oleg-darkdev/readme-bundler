/*
  @description - функция выполнения комманд в операционной системе
  @param { array } - комманда для выполнения в операционной системе
  @returns - выполняет переданную ей комманду
*/
function runcmd(command) {
  for (let lenArrayCoomands = command.length, i = 0; i < lenArrayCoomands; i++) {
    exec(command[i],
    (error, stdout, stderr) => {
        console.log(`${stdout}`);
        console.log(`${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
  };

  console.log(' add files on commit ')
};


module.exports = runcmd;
