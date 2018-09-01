const path = require('../../path'),
    listFiles = require('../../orderFiles/ru/ru.js');
/*
  @description - список всех доступных git комманд для выполнения в операционной системе характерных для конкретного документа
  @returns - выполнение git комманд характерных для конкретного документа
*/
const commandsRu = {
  addLogo : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[0],           `update ${listFiles[0].slice(0, listFiles[0].length - 3)}`),
  addIntroduction : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[1],   `update ${listFiles[1].slice(0, listFiles[1].length - 3)}`),
  addNavigation : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[2],     `update ${listFiles[2].slice(0, listFiles[2].length - 3)}`),
  addInstall : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[3],        `update ${listFiles[3].slice(0, listFiles[3].length - 3)}`),
  addCommands : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[4],       `update ${listFiles[4].slice(0, listFiles[4].length - 3)}`),
  addCli : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[5],            `update ${listFiles[5].slice(0, listFiles[5].length - 3)}`),
  addCliGulp : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[6],        `update ${listFiles[6].slice(0, listFiles[6].length - 3)}`),
  addReleases : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[7],       `update ${listFiles[7].slice(0, listFiles[7].length - 3)}`),
  addDocumentation : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[8],  `update ${listFiles[8].slice(0, listFiles[8].length - 3)}`),
  addTroubleshooting : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[9],`update ${listFiles[9].slice(0, listFiles[9].length - 3)}`),
  addScreenshotes : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[10],  `update ${listFiles[10].slice(0, listFiles[10].length - 3)}`),
  addExamples : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[11],      `update ${listFiles[11].slice(0, listFiles[11].length - 3)}`),
  addArchitecture : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[12],  `update ${listFiles[12].slice(0, listFiles[12].length - 3)}`),
  addStack : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[13],         `update ${listFiles[13].slice(0, listFiles[13].length - 3)}`),
  addLicense : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[14],       `update ${listFiles[14].slice(0, listFiles[14].length - 3)}`),
  addTeamCore : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[15],     `update ${listFiles[15].slice(0, listFiles[15].length - 3)}`),
  addContribute : gitCommandsToCreateCommit(path.src.docs.ru + listFiles[16],    `update ${listFiles[16].slice(0, listFiles[16].length - 3)}`),
  addSponsors: gitCommandsToCreateCommit(path.src.docs.ru + listFiles[17],       `update ${listFiles[17].slice(0, listFiles[17].length - 3)}`)
};

module.exports = commandsRu;
