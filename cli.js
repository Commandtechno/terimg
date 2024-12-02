#! /usr/bin/env node

const terimg = require("./index");
const images = process.argv.slice(2);

(async () => {
  for (const image of images) await terimg(image).then(console.log);
})();
