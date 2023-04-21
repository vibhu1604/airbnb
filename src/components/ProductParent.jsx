import React, { useState } from 'react';
import ProductSlider from './ProductSlider';
import { Container } from 'react-bootstrap'

function ProductParent() {
    const [products, setProducts] = useState(
        [
            {
                id: 1,
                avail: "Sold Out",
                img: "../images/swimmer.png",
                rate: "5.0",
                reviews: "6",
                location: "USA",
                title: "Life lessons with Katie Zaferes",
                price: "136"
            },
            {
                id: 2,
                avail: "Sold Out",
                img: "../images/learn-weddingphoto.png",
                rate: "5.0",
                reviews: "6",
                location: "USA",
                title: "Life lessons with Katie Zaferes",
                price: "136"
            },
            {
                id: 3,
                avail: "Sold Out",
                img: "../images/bicycle.png",
                rate: "5.0",
                reviews: "6",
                location: "USA",
                title: "Life lessons with Katie Zaferes",
                price: "136"
            }
        ]
    );
    return (
        <>
            <Container className='py-4'>
                <div class="grid grid-cols-4 gap-4">
                    {
                        products.map((product) => {
                            return (
                                <ProductSlider
                                    avail={product.avail}
                                    img={product.img}
                                    rate={product.rate} reviews={product.reviews}
                                    location={product.location}
                                    title={product.title}
                                    price={product.price}
                                />
                            )
                        })
                    }
                </div>
            </Container >
        </ >
    )
}

export default ProductParent
