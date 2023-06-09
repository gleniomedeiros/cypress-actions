const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM4MDNkODZiLWVmYjMtNGMxNy04YWJlLTMyYmE5ZDJkYjBlYi0xNjg2Mjc5MDg5ODI3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTQwYzM4MjctZTgxOS00MGQxLTk0MTUtNDM4NjA0ZTEyNmY3IiwidHlwZSI6InQifQ.eL4QPkAQmv2VHTGlp2zScj4oa0jVdArGy83cV--jlb4'

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
