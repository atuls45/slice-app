const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const secretKey = '1234';
const salt = 5;

/**
 * @class HelperUtils
 * @description
 * @exports HelperUtils
 */
class HelperUtils {
  /**
   * @method generateToken
   * @description
   * @returns token
   */
  static generateToken(payload) {
    const token = jwt.sign(payload, secretKey);
    return token;
  }

  /**
   * @method verifyToken
   * @description
   * @returns payload
   */
  static verifyToken(token) {
    try {
      const payload = jwt.verify(token, secretKey);
      return payload;
    } catch (error) {
      return false;
    }
  }

  /**
   * @method hashPassword
   * @description
   * @returns
   */
  static hashPassword(password) {
    return bcrypt.hashSync(password, salt);
  }

  /**
   * @method verifyPassword
   * @description
   * @returns
   */
  static verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

module.exports = HelperUtils;
