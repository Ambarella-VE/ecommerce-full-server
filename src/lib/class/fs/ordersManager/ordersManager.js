/* -------------------------------------------- */
/*              //* OrdersManager.js            */
/* -------------------------------------------- */
import ListManager from '../listManager/ListManager.js';

export default class OrdersManager extends ListManager {
  constructor(path){
    super(path);
  }

  getByUser(uid) {
    return new Promise((resolve, reject) => {
      const orders = this.items.filter(order => order.uid === uid);
      resolve({
        statusCode:200,
        response:orders
      });
    });
  }
}