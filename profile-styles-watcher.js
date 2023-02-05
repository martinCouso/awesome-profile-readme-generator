const fs = require('fs');
const md5 = require('md5');
const path = require('path');
require('log-timestamp');

const profileStylesFile = './src/styles/Demo.module.css';

console.log(`Watching for file changes on ${profileStylesFile}`);

let md5Previous = null;
let fsWait = false;
fs.watch(profileStylesFile, (event, filename) => {
    if (filename) {
        if (fsWait) return;
        fsWait = setTimeout(() => {
            fsWait = false;
        }, 100);
        const md5Current = md5(fs.readFileSync(profileStylesFile));
        if (md5Current === md5Previous) {
            return;
        }
        md5Previous = md5Current;
        console.log(`${filename} file Changed`);
        fs.copyFile(profileStylesFile, path.join('./public', 'profile-styles.css'), (err) => {
            if (err) throw err;
            console.log('source.txt was copied to destination.txt');
        });
    }
});
