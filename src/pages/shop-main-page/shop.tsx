import * as React from "react";
import { Product } from "../../shared/product";

var container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'  
}

export const ShopPage = () => (
    <div style = {container}>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
    </div>
);