/*
	@description Для вызова доступны методы:
	ru.docs()
	ru.readme()
*/
// import ru from './lib/lang_modules/ru';
/*
	@description Для вызова доступны методы:
	bel.docs()
	bel.readme()
*/
// import bel from './lib/lang_modules/bel';
/*
	@description Для вызова доступны методы:
	en.docs()
	en.readme()
*/
// import en from './lib/lang_modules/en';
/*
	@description Для вызова доступны методы:
	ua.docs()
	ua.readme()
*/
// import ua from './lib/lang_modules/ua';
/*
	@description Для вызова доступны методы:
	pl.docs()
	pl.readme()
*/
// import pl from './lib/lang_modules/pl';


let [generationType = '-r', lang = 'en'] = [process.argv[2], process.argv[3]];

if (process.argv.length <= 3) {
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
} else if (process.argv.length > 2) {
	fs.readdir(path , function (err, items) {
		items.forEach( (el, ind) => {
			console.log(el = el.slice(0,2));
			// console.log(lang);
			// проверка по наличию модуля на нужном языке в директории языковых модулей, если такого нету то увы!)
			if(el == lang) {
        import langModule from `./lib/lang_modules/${items[ind]}`;

        if (generationType == '-d') {
          langModule.genDocs();
        } else if (generationType == '-r') {
          langModule.genReadme();
        } else if (generationType == '-h') {
          langModule.genHtml();
        };
				// console.log( 'cli start! ' + items[ind] )
			} else {
				console.log(' warning? Dont find language module!')
			}
		});
	});
};



