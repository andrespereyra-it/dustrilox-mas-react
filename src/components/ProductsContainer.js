import { useState } from 'react';
import axios from 'axios'

export const ProductsContainer = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);

    const handleChange = (e, type) => {
        if (type === "name") {
            setProductName(e.target.value);
        } else if (type === "price") {
            setProductPrice(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        /* fetch('https://dustrilox.free.beeceptor.com/api/products')
        .then(res => res.json())
        .then(data => console.log(data)) */
        axios.post('https://dustrilox.free.beeceptor.com/api/products', {
            "product-name": productName,
            "product-price": productPrice
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    };

    return (
        <div>
            <section className="contact__area-2">
                <div className="container">
                    <div className="contact__form">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <form id="cart_post_form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="contact-filed mb-20">
                                                    <input 
                                                        value={productName}
                                                        name="product_name" 
                                                        placeholder="Producto" 
                                                        onChange={(e) => handleChange(e, "name")}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="contact-filed mb-20">
                                                    <input 
                                                        value={productPrice}
                                                        name="product_price" 
                                                        placeholder="Precio" 
                                                        onChange={(e) => handleChange(e, "price")}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-submit text-center">
                                                <button type="submit" className="tp-btn">Enviar datos</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            {/* <section className="contact__area-2">
                <div className="container">
                    <div className="contact__form">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <form id="cart-get-form">
                                        <div className="row">
                                            <div className="form-submit text-center">
                                                <button type="submit" className="tp-btn">Leer datos</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}
