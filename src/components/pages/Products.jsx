import React from "react";
import {data} from "../data";
import ProductsItem from "../ProductsItem";

const Products = () => {
    return (
        <>
            {data.map((elem, index) => {
                return (
                    <ProductsItem
                        key={index}
                        image={elem.image}
                        titleTop={elem.titleTop}
                        titleBottom={elem.titleBottom}
                        text={elem.text}
                    />
                );
            })}
        </>
    );
}

export default Products;