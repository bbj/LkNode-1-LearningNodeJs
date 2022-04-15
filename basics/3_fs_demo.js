const fs = require('fs')
const data = require('./3_data.json')
console.log('data.name from require: ', data.name);

fs.readFile('./3_data.json', 'utf-8', (err, data) => {
  const rdata = JSON.parse(data)
  console.log('rdata.name from readFile: ', rdata.name);
})

fs.readdir('./', (err, data) => {
  console.log('fs.readdir:', data);
})

const bdata = { name: 'Bob' }
fs.writeFile('3_bob_data.json', JSON.stringify(bdata), (err) => {
  console.log('write finished; err=', err)
})