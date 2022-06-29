const express = require('express');
const path = require('path');
const { product, customer, loadProduct, loadCustomer, updateCustomer } = require('./modules/controller.js');

require('dotenv').config();

const port = process.env.PORT;
const app = express();


const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')


app.use(express.static(DIST_DIR))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/productdata/:id", (req, res) => {
    loadProduct(req)
    res.status(200).send(product)
})

app.get("/customerdata/:id", (req, res) => {
    loadCustomer(req)
    res.status(200).send(customer)
})

app.post("/:id/collect", (req, res) => {
    updateCustomer(req)
    res.status(200).send(customer)
})

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})


app.listen(port, () => console.log(`Listening on port ${port}`))
