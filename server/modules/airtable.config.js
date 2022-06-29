const Airtable =  require('airtable');


require('dotenv').config()

const BASE_ID = process.env.BASE_ID

const base = new Airtable({ apiKey: process.env.API_KEY }).base(BASE_ID)


module.exports = base