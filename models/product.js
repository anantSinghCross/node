const fs = require('fs');
const path = require('path');
const rootPath = require('../utils/path');
const pathToProducts = path.join(rootPath, 'data', 'products.json');

class Product {
    constructor(title){
        this.title = title;
    }
    
    static fetchAll(callback){
        fs.readFile(pathToProducts, (err, content) => {
            if(err){
                callback([]);
                return;
            }
            callback(JSON.parse(content))
        })
    }

    save(){
        // Read the file then push then write the file
        fs.readFile(pathToProducts, (err, content) => {
            let products = [];
            if(!err){
                products = JSON.parse(content);
            }
            products.push(this);
            fs.writeFile(pathToProducts, JSON.stringify(products), (err) => {
                console.error(err);
            })
        })
    }
}

module.exports = Product