'use strict';

let express = require('express');
let app = express();

let isRunning = false;

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) { throw err; }
        isRunning = true;
        console.log(`Server Is Up On Port ${port}`);
      });
    } else {
      console.log('Server Is Already Running');
    }
  }, 
  stop: () => {
    app.close( () => {
      isRunning = false; 
      console.log('Server Has Been Stopped');
    });
  } // eslint-disable-line
};