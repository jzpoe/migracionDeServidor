const express = require('express');
const router = express.Router();
const port = 3000;

express.Router(express.json());

router.get('/completas', function(req, res) {
const completas ={
    descripcion: 'barrer'
}
res.json(completas);
});

router.get('/incompletas', function(req, res) {
    const inCompletas ={
        descripcion: 'trapear'
    }
    res.json(inCompletas)
});
module.exports= router;