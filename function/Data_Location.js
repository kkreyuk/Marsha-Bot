
const fs = require('fs')

JSON_DATA = {
setting: JSON.parse(fs.readFileSync('./lib/go.json')),

}

exports.setting_JSON = JSON_DATA.setting;
