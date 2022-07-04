import React from 'react';
import Start from './Start.js';
import Expired from './QuoteExpired.js';
import AlreadyAccepted from './QuoteAlreadyAccepted.js';
import { useParams } from 'react-router-dom';


export default function CheckQuoteStatus() {

    let { id } = useParams()

    const [productData, setProductData] = React.useState("")

    React.useEffect(() => {
        fetch(`/productdata/${id}`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])


    return (
        <>
            {productData.status ?
                productData.status === "Expired" ?
                    <Expired /> :
                    productData.status.includes("Accepted") ?
                        <AlreadyAccepted />
                        : <Start
                            customerName={productData.customerName}
                            brand={productData.brand}
                            modelSpec={productData.modelSpec}
                            size={productData.size}
                            outrightPrice={productData.outrightPrice}
                            PXprice={productData.PXprice}
                        />
                : null
            }
        </>
    )
}
