import { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartProducts));
    }, [cartProducts]);

    function getProductQuantity(id) {
        const product = cartProducts.find((product) => product.id === id);
        return product ? product.quantity : 0;
    }

    function addOneToCart(id, name, price, description, quantity) {
        console.log("addOneToCart triggered with id:", id);
        setCartProducts((prevCartProducts) => {
            const existingProduct = prevCartProducts.find((product) => product.id === id);

            if (existingProduct) {
                Swal.fire({
                    icon: "success",
                    text: "Item updated successfully! Check your cart!",
                });

                return prevCartProducts.map((product) =>
                    product.id === id ? { ...product, quantity: product.quantity + quantity } : product
                );
            } else {
                console.log("entered into addtocart has been added successfuly!")
                Swal.fire({
                    icon: "success",
                    text: "Item added successfully! Check your cart!",
                });

                return [
                    ...prevCartProducts,
                    {
                        id, // Ensure each item has a unique ID
                        name,
                        price,
                        description,
                        quantity,
                    },
                ];
            }
        });
    }

    function removeOneFromCart(id) {
        Swal.fire({
            icon: "success",
            text: "One item removed successfully! Check your cart!",
        });

        setCartProducts((prevCartProducts) =>
            prevCartProducts.map((product) =>
                product.id === id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    }

    function deleteFromCart(id) {
        Swal.fire({
            icon: "success",
            text: "Item deleted successfully! Check your cart!",
        });

        setCartProducts((prevCartProducts) => prevCartProducts.filter((product) => product.id !== id));
    }

    function getTotalCost() {
        return cartProducts.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    };

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;
