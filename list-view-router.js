const express = require('express');
const router = express.Router();
const task = require('./middleware/task')


express.Router(express.json());

router.get('/completas', (req, res)=> {
res.status(200).json(task)


});

router.get('/incompletas', function(req, res) {
    const inCompletas ={
        descripcion: 'trapear'
    }
    res.json(inCompletas)
});
module.exports= router;