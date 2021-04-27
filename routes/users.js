const express = require('express');
const router = express.Router();

/* GET users listing. */


router.get('/test', function(req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send({
        string_to_cut: 'thisisthestringiwouldliketocut',
        return_string: string_to_cut.slice(string_to_cut % 3 == 2)
    })
});

router.post('/test',(req, res, next) => {
        console.log(req.body.return_string); 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(req.body.return_string);
});

module.exports = router;
