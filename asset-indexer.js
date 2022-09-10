import { readdirSync, writeFileSync } from 'fs';

const assetPath = './public/assets/';

// Create an array of all the files ./assets/images/
var assets = readdirSync(assetPath + '/images');
// Save assets to json
writeFileSync(assetPath + 'assets.json', JSON.stringify(assets));

console.log('✅ Indexed assets to ' + assetPath + 'assets.json');
