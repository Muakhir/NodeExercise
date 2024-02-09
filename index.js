let fs = require('fs/promises');

async function appendDataToFile() {
    try {
      let filePath = 'data.txt';
  
      await fs.appendFile(filePath, 'First line\n', 'utf8');
  
      await fs.appendFile(filePath, 'Second line\n', 'utf8');
  
      await fs.appendFile(filePath, 'Third line\n', 'utf8');
    } catch (err) {
      console.log(err.message);
    }
  }
  
  appendDataToFile().then(() => {
    console.log('Data appended to the file');
  });

//   it does not overide the first content due to the \n command it moves each append to new line





