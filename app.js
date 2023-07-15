const express = require('express');
const app = express();


    const listaTareas =[{
        id:"12",
        isComplete: "true",
        desciption:"walk the dog"

    }]
    app.get('/tareas', (req, res) => {
            res.json(listaTareas);
})

app.listen(3000, ()=>{
    console.log("listen port");
})