class User {

  constructor ({ first, last }) {
    this.first = first
    this.last = last
  }

  get fullname () {
    return `${this.first} ${this.last}`
  }

  toJSON () {
    return {
      first : this.first,
      last  : this.last
    }
  }

}

export default User
