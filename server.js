  
const express = require('express');

const app = express();

app.use(express.static('./dist/recipes'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/recipes/'}),
);

app.listen(process.env.PORT || 4200);