import React, { Component } from "react";
import {Link } from "react-router-dom";
import axios from "axios";

class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get("https://practiceapi.devmountain.com/products").then(response => {
            this.setState({ products: response.data });
        });
    }

    render(){
        let products = this.state.products.map((product, index) => {
            if (product.image) {
                return (
                    <link key={index} to={` /details/${product.id}`}>
                    <img width="200" scr={product.image} />
                    </link>
                    );
            }
        });

        return (
            <div>
                <h1>Products</h1>
                {products}
            </div>
        );
    }
}

export default Products;