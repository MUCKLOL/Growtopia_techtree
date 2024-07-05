const items = require('../data/items.json');

function getItem(name) {
    return items.find(item => item.name.toLowerCase() === name.toLowerCase());
}

module.exports = { getItem };
