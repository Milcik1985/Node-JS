const names = ["Onute", "Maryte", "Petras", "Jonas", "Albinas", "Bronius"];
const sortedNames = names.sort()
console.log(sortedNames)

const { v4: uuidv4 } = require("uuid");

 const namesWithId = names.map(name => ({name, uuid: uuidv4()}))
 console.log(namesWithId);

//  Apsirašyt funkciją kuriai reikia paduot vartotojo vardą bei darbovietę. Funkcija turi gražint vartotojo objektą su vartotojo vardu, darboviete bei user'io id;

 function createUser(userName, workPlace) {
     const userId = uuidv4()
     return {
         userId,
         userName: userName,
         userWorkPlace: workPlace
     }
 }

 const user = createUser("Albinas", "UAB Imone")
 console.log(user)
