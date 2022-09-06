const express = require('express');
const app = express();
const router = express.Router();

const path = require('path');
const db = require(path.resolve(__dirname, 'db.json'));

router.get('/', (_, res) => {
    res.send(db);
});

app.use('/classes', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app listening on ${port}`)
});

