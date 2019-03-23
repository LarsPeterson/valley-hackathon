module.exports = {
  comparePassword: function(hashedPass, compromisedList) {
    for (var i = 0; i < compromisedList.length; i++) {
      compromisedList[i] = compromisedList[i].split(":")[0];
    }

    hashedPass = hashedPass.substr(5, hashedPass.length).toUpperCase();

    if (compromisedList.includes(hashedPass)) {
      return true;
    } else {
      return false;
    }
    // compromisedList.forEach((v, i) => {
    //   console.log("Looking for:       " + hashedPass);
    //   console.log("Comparing Against: " + v);
    //   console.log("\n");

    //   if (v == hashedPass) return true;
    //   if (v.indexOf(hashedPass) !== -1) return true;
    // });
  }
};
