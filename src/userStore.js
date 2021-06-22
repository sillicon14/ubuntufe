export class UserStore {
  constructor() {
    this.userId = "";
    this.cartId = "";
    this.regMes = "";
    this.isAdmin = "";
    this.signMes = "";
  }

  setUserId(userId) {
    this.userId = userId;
  }
  getUserId() {
    return this.userId;
  }

  setCartId(cartId) {
    this.cartId = cartId;
  }
  getCartId() {
    return this.cartId;
  }

  setregMes(regMes) {
    this.regMes = regMes;
  }
  getregMes() {
    return this.regMes;
  }
  setsignMes(signMes) {
    this.signMes = signMes;
  }
  getsignMes() {
    return this.signMes;
  }
  setAdmin(isAdmin) {
    this.isAdmin = isAdmin;
  }
  getisAdmin() {
    console.log(this.isAdmin);
    return this.isAdmin;
  }
}

const us = new UserStore();
export default us;
