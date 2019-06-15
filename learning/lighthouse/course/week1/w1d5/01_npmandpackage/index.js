// Required Files:
var chalk = require("chalk");

var log = console.log;

var message = "Hello" + chalk.yellow("World");
log(message);

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
