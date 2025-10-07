// use for new react version and its mroe flex, but useContext is for new react versions
import { use, useContext } from "react";

import { CartContext } from "../store/shopping-cart-context";

export default function Cart() {
    // there is another approach with cart context.consumer to access the context value
    const { items, updateItemQuantity } = useContext(CartContext);

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

    return (
        <div id="cart">
            {items.length === 0 && <p>No items in cart!</p>}
            {items.length > 0 && (
                <ul id="cart-items">
                    {items.map((item) => {
                        const formattedPrice = `$${item.price.toFixed(2)}`;

                        return (
                            <li key={item.id}>
                                <div>
                                    <span>{item.name}</span>
                                    <span> ({formattedPrice})</span>
                                </div>
                                <div className="cart-item-actions">
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(item.id, -1)
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() =>
                                            updateItemQuantity(item.id, 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
            <p id="cart-total-price">
                Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
        </div>
    );
}
