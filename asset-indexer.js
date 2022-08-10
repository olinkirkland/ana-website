const fs = require('fs');

const assetPath = './public/assets/';

// Create an array of all the files ./assets/images/
var assets = fs.readdirSync(assetPath + '/images');
// Save assets to json
fs.writeFileSync(assetPath + 'assets.json', JSON.stringify(assets));
