let fs = require('fs/promises');

// function appendFile(data) {
//    fs.appendFile('data.txt', data, (err) => {
//        if (err) throw err;
//        console.log('Data appended to file.');
//    });
// }

//  // It does not overide the first content but it also does not display
// //  in the next line

// appendFile('Hello, World!');
// appendFile('Bye, World!');


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









