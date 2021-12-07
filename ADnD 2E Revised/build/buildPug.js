﻿const pug = require('pug');
const fs = require('fs');
console.log('---- Generating dynamicDatalists ----');
const spellsJs = ['wizardSpells.js', 'priestSpells.js'];
let html = '';
spellsJs.forEach(jsFile => {
    console.log(jsFile);
    const spells = require(`../javascript/${jsFile}`);
    html += pug.renderFile('../pug/spellsDatalists.pug', {pretty: true, data: spells});
});

console.log('weapons.js')
const weapons = require(`../javascript/weapons.js`);
html += pug.renderFile('../pug/weaponsDatalists.pug', {pretty: true, data: weapons});

fs.writeFileSync('../html/dynamicDatalists.html', html);
console.log('');