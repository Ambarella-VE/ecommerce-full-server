/* -------------------------------------------- */
/*              //* UsersManager.js             */
/* -------------------------------------------- */
import ListManager from "../listManager/ListManager.js";
import toTitleCase from "../../functions/toTitleCase.js";

export default class UsersManager extends ListManager {
  static items;

  constructor(path) {
    super(path);
  }

  async add(item) {
    return new Promise((resolve, reject) => {
      const userExists = this.items.some((u) => u.email === item.email);
      if (userExists) {
        resolve({
          statusCode: 400,
          response: userExists,
        });
      } else {
        const newUser = {
          ...item,
          fName: toTitleCase(item.fName),
          lName: toTitleCase(item.lName),
        };
        super.add(newUser)
      }
    });
  }
}
