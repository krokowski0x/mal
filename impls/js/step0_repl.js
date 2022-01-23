const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const READ = (a) => a;

const EVAL = (a) => a;

const PRINT = (a) => a;

const REP = (a) => PRINT(EVAL(READ(a)));

(async () => {
    while (true) {
        const line = await rl.question('user> ');
        if (line == null) break;
        console.log(REP(line.trim()));
    }
})()
