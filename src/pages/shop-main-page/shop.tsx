import * as React from "react";
import { Product } from "../../shared/product";

import Image1 from "../../assets/images/eukaliptus.jpg";
import Image2 from "../../assets/images/klon_kulisty.jpg";
import Image3 from "../../assets/images/klon_tatarski.jpg";
import Image4 from "../../assets/images/perukowiec.jpg";

var container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'  
}

var products: { displayName: string, price: number, imageUrl: string }[] = [
    { "displayName": 'Eucalyptus', "price": 12.99, imageUrl: Image1 },
    { "displayName": 'Acer rubrum', "price": 6.95, imageUrl: Image2 },
    { "displayName": 'Acer tataricum', "price": 24.15, imageUrl: Image3 },
    { "displayName": 'Cotinus coggygria', "price": 10.10, imageUrl: Image4 },
]; 

export const ShopPage = () => (
    <div className='daily-deals'>
        <h1 className="font-bold text-center mb-8 text-grey-100 text-2xl md:text-5xl leading-tight" >
          Today's Deals
        </h1>
        <div style = {container}>
            <ul>
                {products.map((product) => {        
                    return <li><Product displayName={product.displayName} price={product.price} imageUrl={product.imageUrl}/></li>
                })}
            </ul>
        </div>
    </div>
);