// 1. enter password
// 2. hit API with entered password
// 3. return list of similar passwords (passwords that match first few characters)
// 4. narrow list by

// user enters password
// encrypt it (salt + hash)
//

// barebones
// api that checks if comprimised password

const passwordToCheck = "passwordpassword1";

const hashCheck = require("./hashCheck");
const http = require("https");
const encryptor = require("./encryptor");

let password = encryptor.encryptPassword(passwordToCheck);
passwordSub = password.substr(0, 5).toUpperCase();
console.log(passwordSub);

let onComplete = function(list) {
  if (hashCheck.comparePassword(password, list)) {
    console.log("FINALLY! Your password is compromised");
  } else {
    console.log("Your password is not compromised");
  }
};

encryptor.getPasswordList(passwordSub, onComplete);
