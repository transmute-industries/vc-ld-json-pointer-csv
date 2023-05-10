

const fs = require('fs');
const JsonPointer = require('json-pointer');
const {convertArrayToCSV} = require('convert-array-to-csv');
const example = require('./example.json');
function toKebab(string) {
  return string
    .split('')
    .map((letter) => {
      if (/[A-Z]/.test(letter)) {
        return ` ${letter.toLowerCase()}`;
      }
      return letter;
    })
    .join('')
    .trim()
    .replace(/[_\s]+/g, '-');
}
const encodeCredential = (verifiableCredential)=>{
  const file = toKebab(
    verifiableCredential.type[verifiableCredential.type.length - 1]
  );
  const vc = JSON.parse(JSON.stringify(verifiableCredential));
  const dict = JsonPointer.dict(vc);
  const csv = convertArrayToCSV([dict], {
    separator: ',',
  });
  const uri = encodeURI(
    `data:text/csv;charset=utf-8,${csv}`
  );
  return {file, csv, uri}
}
(async ()=>{
  const {file, csv, uri} = encodeCredential(example)
  fs.writeFileSync(file + '.json', JSON.stringify(example, null, 2))
  fs.writeFileSync(file + '.csv', csv)
  fs.writeFileSync(file + '.csv.uri', uri)
})()