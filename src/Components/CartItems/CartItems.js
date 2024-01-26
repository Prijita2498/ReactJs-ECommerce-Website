import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';

export default function CartItems() {

    const { all_product, cartItems, removeCartItem,getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img className="carticon-product-icon" src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className="cartItems-remove-icon" src={remove_icon} alt="" onClick={() => { removeCartItem(e.id) }} />
                        </div>
                        <hr />
                    </div>
                }

                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>

                    <div>
                        <div className="cartitems-total-item">
                            <p>Sub Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>

                        <div className="cartitems-total-item">
                            <p>Shipping charges</p>
                            <p>Free</p>
                        </div>
                        <hr/>

                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Buy Now</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Add Promo Code</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Enter Promo Code"/>
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
}