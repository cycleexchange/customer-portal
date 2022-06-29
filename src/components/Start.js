import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import { fadeIn, headText } from '../lib/useAnimation'


export default function Start() {

    let { id } = useParams();

    const [productData, setProductData] = React.useState("")

    React.useEffect(() => {
        fetch(`/productdata/${id}`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])


    return (
        <motion.div className="start__container" variants={fadeIn} initial="initial" animate="animate">
            <motion.h2 className="head__text" variants={headText} initial="initial" animate="animate">
                Thanks for accepting your quote, {productData.customerName}!
            </motion.h2>
            <p>In order to sell your</p>
            <p className="body__text--red">{productData.brand} {productData.modelSpec} {productData.size}</p>
            <p>for</p>
            <div className="quote__wrap">
                <div className="quote">
                    <h2 className="head__text--red">£{productData.outrightPrice}</h2>
                    <p>Outright Price</p>
                </div>
                <div className="quote">
                    <h2 className="head__text--red">£{productData.PXprice}</h2>
                    <p>Part Exchange Price</p>
                </div>
            </div>
            <p>Choose from the options below:</p>
            <div className="button__wrap">
                <Link to={`/${id}/collect`}><Button id="large-button">Free Collection</Button></Link>
                <Link to={`/${id}/dropoff`}><Button id="large-button">Drop Off in Store</Button></Link>
            </div>
        </motion.div>
    )
}
