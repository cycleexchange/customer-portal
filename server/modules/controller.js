const base = require('./airtable.config');
const postcodes = require('./postcodes.js');

require('dotenv').config()

const TABLE_ID = process.env.TABLE_ID


const product = {
  id: "default",
  quoteID: "",
  customerName: "",
  brand: "",
  modelSpec: "",
  size: "",
  outrightPrice: 0,
  PXprice: 0
}

const customer = {
  id: "",
  name: "",
  email: "",
  address: "",
  town: "",
  postcode: "",
  phone: ""
}


function loadProduct(req) {
  base(TABLE_ID).find(req.params.id,
    (err, record) => {
      if (err) { console.error(err); return; }

      product.id = record.get("RecordID"),
        product.quoteID = record.get("Quote ID"),
        product.customerName = record.get("Name"),
        product.brand = record.get("Brand"),
        product.modelSpec = record.get("Model & Spec"),
        product.size = record.get("Size"),
        product.outrightPrice = record.get("Outright Price"),
        product.PXprice = record.get("PX Price")
    })
}


function loadCustomer(req) {
  base(TABLE_ID).find(req.params.id,
    (err, record) => {
      if (err) { console.error(err); return; }

      customer.id = record.get("RecordID"),
        customer.name = record.get("Name"),
        customer.email = record.get("Email"),
        customer.address = record.get("Customer Collection Address"),
        customer.town = record.get("Customer Collection Town"),
        customer.postcode = record.get("Customer Collection Postcode"),
        customer.phone = record.get("Customer Phone Number")
    })
}


function updateCustomerCollection(req, res) {
  base(TABLE_ID).find(req.params.id,
    (err, record) => {
      if (err) { console.error(err); return; }

      const productType = record.get("Type Of Product")
      const postcode = req.body.postcode
      let matchingPostcode = false
      postcodes.forEach(e => { if (postcode.includes(e)) { matchingPostcode = true } })

      if (productType === "Full Bike" && matchingPostcode) {
        base(TABLE_ID).update([{
          "id": req.params.id,
          "fields": { "Status": "Accepted (Flamme Rouge)" }
        }],
          (err) => {
            if (err) { console.error(err); return; }
          }
        )
      } 
      else {
        base(TABLE_ID).update([{
          "id": req.params.id,
          "fields": { "Status": "Accepted (Post)" }
        }],
          (err) => {
            if (err) { console.error(err); return; }
          }
        )
      }
      base(TABLE_ID).update([{
        "id": req.params.id,
        "fields": {
          "Drop Off/Collection" : "Collection", 
          "Email": req.body.email,
          "Customer Collection Address": req.body.address,
          "Customer Collection Town": req.body.town,
          "Customer Collection Postcode": req.body.postcode,
          "Customer Phone Number": req.body.phone
        }
      }])
    })
}


module.exports = { product, customer, loadProduct, loadCustomer, updateCustomerCollection }