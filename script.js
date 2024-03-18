

const names = ["Onute", "Maryte", "Petras", "Jonas", "Albinas", "Bronius"];
const sortedNames = names.sort()
console.log(sortedNames)

const showSortedNames = document.getElementsByClassName("names")[0]

 const { v4: uuidv4 } = require('uuid');

 const namesWithId = names.map(name => ({name, uuid: uuidv4()}))
 showSortedNames.innerHTML = namesWithId.map(obj => `${obj.name}: ${obj.uuid}`).join("<br>")

 console.log(namesWithId);
