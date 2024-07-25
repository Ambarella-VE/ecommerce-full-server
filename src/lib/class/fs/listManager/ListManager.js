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

  addMany(items) {
    return new Promise((resolve, reject) => {
      const newItems = items.map((item) => ({
        ...item,
        id: crypto.randomBytes(16).toString('hex')
      }));
      this.items.push(...newItems);
      this._saveToFile();
      resolve({
        statusCode:201,
        response:newItems
      });
    });
  }

  
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
  delete(id) {
    return new Promise((resolve, reject) => {
      const index = this.items.findIndex((item) => item.id === id);
      if (index === -1) {
        reject(new Error(`Item with ID ${id} not found`));
      } else {
        this.items.splice(index, 1);
        this._saveToFile();
        resolve({
          statusCode:200,
          response:`Item with ID ${id} deleted`
        });
      }
    });
  }

  deleteMany(ids) {
    return new Promise((resolve, reject) => {
      const deletedItems = [];
      ids.forEach((id) => {
        const index = this.items.findIndex((item) => item.id === id);
        if (index !== -1) {
          deletedItems.push(this.items.splice(index, 1)[0]);
        }
      });
      this._saveToFile();
      resolve({
        statusCode:200,
        response:`Items with IDs ${ids.join(', ')} deleted`
      });
    });
  }

  update(item) {
    return new Promise((resolve, reject) => {
      const index = this.items.findIndex((i) => i.id === item.id);
      if (index === -1) {
        reject(new Error(`Item with ID ${item.id} not found`));
      } else {
        this.items[index] = item;
        this._saveToFile();
        resolve({
          statusCode:200,
          response:item
        });
      }
    });
  }

  updateMany(items) {
    return new Promise((resolve, reject) => {
      const updatedItems = [];
      items.forEach((item) => {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          this.items[index] = item;
          updatedItems.push(item);
        }
      });
      this._saveToFile();
      resolve({
        statusCode:200,
        response:updatedItems
      });
    });
  }


  async _saveToFile() {
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.items, null, 2),
    );
  }
}