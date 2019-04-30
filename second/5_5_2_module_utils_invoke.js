// import * from './5_5_2_module_utils.js'
const Member = require('./5_5_2_module_utils.js')

let m = new Member('Miyamoto', 'Yoko');
// console.log(m);


let result = document.getElementById('result');
let text = document.createTextNode(m.getName());
result.appendChild(text);