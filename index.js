const express = require('express')
const app = express()
const accountData = require('./Accounts.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Metro Events Accounts")
})

app.get('/accounts', (req, res) => {
    res.send(accountData)
})

app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})

