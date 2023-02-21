const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImJlMjE4NzIyLWRkZGMtNGNiYi1hN2JhLTFjNDFlN2Q2ODQ0ZC0xNjc3MDA2NTQ1MzIzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiM2I2ZWZiMDUtMjdiYS00ZTdhLWE1MDktM2NjZjcyNDAxN2JiIiwidHlwZSI6InQifQ.LYgkyKJ9UDVA_yFNF9xm39QXAI2c2Su-NvBKq4uALUI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
