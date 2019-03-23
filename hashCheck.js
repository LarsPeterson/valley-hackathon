module.exports = {
  comparePassword: function(hashedPass, compromisedList) {
    if (compromisedList.includes(hashedPass)) {
      return true;
    } else {
      return false;
    }
  }
};
