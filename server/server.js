const express = require('express');
const path = require('path');
const base = require('./modules/airtable.config');
const postcodes = require('./modules/postcodes.js');


require('dotenv').config()

const TABLE_ID = process.env.TABLE_ID

const port = process.env.PORT;
const app = express();


const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')


app.use(express.static(DIST_DIR))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/productdata/:id", (req, res) => {

    base(TABLE_ID).find(req.params.id,
        (err, record) => {
            if (err) { console.error(err); return; }

            const product = {
                id: record.get("RecordID"),
                quoteID: "",
                customerName: record.get("Name"),
                brand: record.get("Brand"),
                modelSpec: record.get("Model & Spec"),
                size: record.get("Size"),
                outrightPrice: record.get("Outright Price"),
                PXprice: record.get("PX Price")
            }
            res.status(200).send(product)
        })
})

app.get("/customerdata/:id", (req, res) => {

    base(TABLE_ID).find(req.params.id,
        (err, record) => {
            if (err) { console.error(err); return; }

            const customer = {
                id: record.get("RecordID"),
                name: record.get("Name"),
                email: record.get("Email"),
                address: record.get("Customer Collection Address"),
                town: record.get("Customer Collection Town"),
                postcode: record.get("Customer Collection Postcode"),
                phone: record.get("Customer Phone Number")
            }
            res.status(200).send(customer)
        })
})

app.post("/:id/collect", (req, res) => {

    base(TABLE_ID).find(req.params.id,
        (err, record) => {
            if (err) { console.error(err); return; }

            const productType = record.get("Type Of Product")
            const postcode = req.body.postcode
            let matchingPostcode = false
            postcodes.forEach(e => { if (postcode.toUpperCase().includes(e)) { matchingPostcode = true } })

            if (productType === "Full Bike" && matchingPostcode) {
                base(TABLE_ID).update([{
                    "id": req.params.id,
                    "fields": { "Status": "Accepted (Flamme Rouge)" }
                }], (err) => { if (err) { console.error(err); return; } }
                )
            }
            else {
                base(TABLE_ID).update([{
                    "id": req.params.id,
                    "fields": { "Status": "Accepted (Post)" }
                }], (err) => { if (err) { console.error(err); return; } }
                )
            }

            base(TABLE_ID).update([{
                "id": req.params.id,
                "fields": {
                    "Drop Off/Collection": "Collection",
                    "Email": req.body.email,
                    "Customer Collection Address": req.body.address,
                    "Customer Collection Town": req.body.town,
                    "Customer Collection Postcode": req.body.postcode,
                    "Customer Phone Number": req.body.phone
                }
            }])
        })
})

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})


app.listen(port, () => console.log(`Listening on port ${port}`))
