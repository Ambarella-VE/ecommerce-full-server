/* -------------------------------------------- */
/*               //* ListManager.js             */
/* -------------------------------------------- */
import fs from 'fs';
import crypto from 'crypto';

export default class ListManager {
  constructor(path) {
    this.path = path;
    this.items = [];
    this.init();
  }

  async init() {
    return new Promise((resolve, reject) => {
      const fileExists = fs.existsSync(this.path);
      if (fileExists) {
        const fileContent = fs.promises.readFile(this.path, 'utf8');
        this.items = JSON.parse(fileContent);
        resolve();
      } else {
        this._saveToFile();
        resolve();
      }
    })
  }

  add(item) {
    return new Promise((resolve, reject) => {
      const newItem ={
        ...item,
        id: crypto.randomBytes(16).toString('hex')
      }
      this.items.push(item);
      this._saveToFile();
      resolve({
        statusCode:201,
        response:newItem
      });
    })
  }


  //TODO - Add many
  

  
  getAll() {
    return new Promise((resolve, reject) => {
      resolve({
        statusCode:200,
        response:this.items
      });
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      const itemFound = this.items.find((item) => item.id === id);
      if (!itemFound) {
        reject(new Error(`Item with ID ${id} not found`));
      } else {
        resolve({
          statusCode:200,
          response:itemFound
        });
      }
    });
  }

  //TODO - Delete one



  //TODO - Update one



  //TODO - Update many




  async _saveToFile() {
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.items, null, 2),
    );
  }
}