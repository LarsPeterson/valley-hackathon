// 1. enter password
// 2. hit API with entered password
// 3. return list of similar passwords (passwords that match first few characters)
// 4. narrow list by

// user enters password
// encrypt it (salt + hash)
//

// barebones
// api that checks if comprimised password

const passwordToCheck = "password";

const hashCheck = require("./hashCheck");
const http = require("https");
const encryptor = require("./encryptor");

let password = encryptor.encryptPassword(passwordToCheck);
password = password.substr(0, 5).toUpperCase();

let onComplete = function(list) {
  console.log(list);
};

encryptor.getPasswordList(password, onComplete);
