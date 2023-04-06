//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = ['ebcuafgsijklonmpqrhtdvwxyz', 'moeaweomdhsinuaird'];

const padrao = lines.shift().split('');
const fraseCriptografada = lines.shift().split('');
const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let fraseDescriptografada = '';

fraseCriptografada.map((l) => {
    let index = alfabeto.indexOf(l);
    let letraReal = padrao[index];
    fraseDescriptografada += letraReal;
});


console.log(fraseDescriptografada);
