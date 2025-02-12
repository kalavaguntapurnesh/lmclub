import { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import Logo from "../assets/LMDark.webp";
import Error from "../assets/error.png";
import success from "../assets/success.png";
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

const style = document.createElement('style');
  style.innerHTML = `
    .swal-custom-ok-button {
      background-color:rgb(27, 202, 103); /* Custom color */
      color:white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
    }

    .swal-custom-ok-button:hover {
      background-color:rgb(18, 91, 25); /* Hover color */
    }
  `;
  document.head.appendChild(style);

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
                // Swal.fire({
                //     icon: "success",
                //     text: "Item updated successfully! Check your cart!",
                // });
                Swal.fire({
                        html: `
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                                    <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                    <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                        <span style="color: black;">LM</span>
                                        <span style="color: rgb(37, 218, 73);">Club</span>
                                    </h4>
                                </div>

                                <!-- Success Image -->
                                <div style="margin-bottom: 20px;">
                                    <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                                </div>

                                <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                                    <h1 style="font-size: 25px;">Item updated successfully! Check your cart!</h1>
                                </div>
                            </div>
                        `,
                        customClass: {
                          confirmButton: 'swal-custom-ok-button',
                        }
                      })
                return prevCartProducts.map((product) =>
                    product.id === id ? { ...product, quantity:  quantity } : product
                );
            } else {
                console.log("entered into addtocart has been added successfuly!")
                // Swal.fire({
                //     icon: "success",
                //     text: "Item added successfully! Check your cart!",
                // });

                Swal.fire({
                    html: `
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                                <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                                <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                    <span style="color: black;">LM</span>
                                    <span style="color: rgb(37, 218, 73);">Club</span>
                                </h4>
                            </div>

                            <!-- Success Image -->
                            <div style="margin-bottom: 20px;">
                                <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                            </div>

                            <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                                <h1 style="font-size: 25px;">Item updated successfully! Check your cart!</h1>
                            </div>
                        </div>
                    `,
                    customClass: {
                      confirmButton: 'swal-custom-ok-button',
                    }
                  })

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
        // Swal.fire({
        //     icon: "success",
        //     text: "One item removed successfully! Check your cart!",
        // });
        Swal.fire({
            html: `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                        <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                        <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                            <span style="color: black;">LM</span>
                            <span style="color: rgb(37, 218, 73);">Club</span>
                        </h4>
                    </div>

                    <!-- Success Image -->
                    <div style="margin-bottom: 20px;">
                        <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                        <h1 style="font-size: 25px;">One item removed successfully! Check your cart!</h1>
                    </div>
                </div>
            `,
            customClass: {
              confirmButton: 'swal-custom-ok-button',
            }
          })


        setCartProducts((prevCartProducts) =>
            prevCartProducts.map((product) =>
                product.id === id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    }

    function deleteFromCart(id) {
        // Swal.fire({
        //     icon: "success",
        //     text: "Item deleted successfully! Check your cart!",
        // });
        Swal.fire({
            html: `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                        <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                        <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                            <span style="color: black;">LM</span>
                            <span style="color: rgb(37, 218, 73);">Club</span>
                        </h4>
                    </div>

                    <!-- Success Image -->
                    <div style="margin-bottom: 20px;">
                        <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                        <h1 style="font-size: 25px;">Item deleted successfully! Check your cart!</h1>
                    </div>
                </div>
            `,
            customClass: {
              confirmButton: 'swal-custom-ok-button',
            }
          })

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
