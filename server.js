const express = require('express');
const fs = require('fs')
const path = require('path')

const app = express();
app.use('/static',express.static('public'));

const sendFile = async (filePath, res, headers) => {
    const file = await fs.readFileSync(path.resolve('public', filePath))
    return res.set(headers).send(file.toString())
}

app.get('/', async (req, res) => {
    return await sendFile('index.html', res, {'Content-Type': 'text/html'})
})

app.get('/cancel', async (req, res) => {
    return await sendFile('cancel.html', res, {'Content-Type': 'text/html'})
})

app.get('/success', async (req, res) => {
    return await sendFile('success.html', res, {'Content-Type': 'text/html'})
})


app.listen(3000, () => console.log('Running on port 3000'));



