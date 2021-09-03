const bcrypt = require('bcrypt');

module.exports = {
  generateHash: (string) => bcrypt.hashSync(string, bcrypt.genSaltSync()),

  compareHash: (a, b) => bcrypt.compareSync(a, b),
};
