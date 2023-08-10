const express = require('express');
const router = express.Router();
const app = express();
const task = require('./middleware/task');

router.use(express.json());
// express.Router(express.json());





router.post('/crearTarea', ( req, res ) => {
    const crear= req.body
    const length= task.length
    crear.id = length +1
    task.push(crear)
    console.log(length);
    res.status(200).json('todo va bien')
} );

router.delete('/eliminar', ( req, res ) => {
    res.json({msg: 'eliminando tareas'})
    
} );

router.put('/actualizarTarea', ( req, res ) => {
    res.json({msg: 'actualizando la tarea'})
} );


module.exports = router;

