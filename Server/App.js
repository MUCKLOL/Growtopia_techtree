const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.use(express.json());

app.get('/api/items/:name', (req, res) => {
    const itemName = req.params.name;
    const item = db.getItem(itemName);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
