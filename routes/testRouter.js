const express = require('express');
//const axios = require('axios');

/* const string_to_cut = {
    string: 'iwillprinteverythirdcharacterofthisstring'
}

axios.post(string_to_cut)
    .then ((res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(req.body.string % 3 == 2);
    }) 
    .catch(err)*/

const testRouter = express.Router();

  router.post('/test', (req, res) => {
    Test.create(req.body)
        new return_string({string_to_cut: req.body.string_to_cut}),
        req.body.enteredString,
        (err, return_string) => {
            if (err) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err});
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(req.body.enteredString % 3 == 2);
            }
        }
}); 

module.exports = testRouter;