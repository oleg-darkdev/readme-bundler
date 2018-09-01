/*
  @description - выполняет набор git комманд в операционной системе
  @param { string } - путь к файлу добавляемому в коммит
  @param { string } - комментарий к комманде git commit
  @returns - выполняет переданную ей комманду
*/
function gitCommandsToCreateCommit(pathToFileWhichAddOnCommit, commentCommit) {
return [`git add ${pathToFileWhichAddOnCommit}`,
        `git commit -m "${commentCommit}"`
        ];
};

module.exports = gitCommandsToCreateCommit;
