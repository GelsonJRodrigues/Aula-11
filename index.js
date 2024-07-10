const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.send("<h3>Rotas no Express</h3><p>Rota '/'")
})

app.post('/', (req, res) => {
    return res.status(200).json('Rota POST')
})

app.put('/', (req, res) => {
    return res.status(200).json('Rota PUT')
})

app.delete('/', (req, res) => {
    return res.status(200).json('Rota DELETE')
})

app.listen(8080, () =>
    console.log('Servidor iniciado na porta 8080')
);
