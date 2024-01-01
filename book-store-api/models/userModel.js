class User {
  constructor(
    name,
    surname,
    email,
    password,
    accountStatus = true,
    adresses = [],
    cart = [],
    last_login = new Date(),
    orders = [],
    payments = []
  ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.accountStatus = accountStatus;
    this.adresses = adresses;
    this.cart = cart;
    this.last_login = last_login;
    this.orders = orders;
    this.payments = payments;
  }
  ConvertToObject(){
    return {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        accountStatus: this.accountStatus,
        adresses: this.adresses,
        cart: this.cart,
        last_login: this.last_login,
        orders: this.orders,
        payments: this.payments,
    }
  }
}

module.exports = User