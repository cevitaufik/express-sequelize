import bcrypt from 'bcrypt'

export class Hash {
  static make (value, salt) {
    return bcrypt.hashSync(value, salt)
  }

  static check (hashed, value) {
    return bcrypt.compareSync(value, hashed)
  }
}
