/* -------------------------------------------- */
/*             //* ProductsManager.js           */
/* -------------------------------------------- */
import ListManager from '../listManager/ListManager.js';

export default class ProductsManager extends ListManager {
  constructor(path) {
    super(path);
  }

  add(item) {
    return new Promise((resolve, reject) => {
      const itemExists = this.items.some(i => i.code === item.code);
      if (itemExists) {
        resolve({
          statusCode:400,
          response:itemExists
        });
      } else {
        super.add(item);
      }
    })
  }
}