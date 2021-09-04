import jwt from 'jsonwebtoken';

class JwtAuth {
  static OPTIONS = {
    algorithm: 'HS256',
    expiresIn: 3_600,
  };

  static sign = (payload) =>
    jwt.sign(payload, process.env.JWT_SECRET, this.OPTIONS);

  static verify = (token) =>
    jwt.verify(token, process.env.JWT_SECRET, this.OPTIONS);
}

export default JwtAuth;
