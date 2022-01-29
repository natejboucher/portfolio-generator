const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an error, reject the promise and send the error to promises catch
            if (err)  {
                reject(err);
                // return to prevent further actions
                return;
            }

            // resolve if everything went well
            resolve({
                ok:true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () =>  {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err)  {
                reject(err);
                return;
            }

            resolve({
                ok:true,
                mesage: 'File copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile};