import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 

const public_stripe_key = "pk_test_51QMcn82NPQsjFaoTZ90xF9ORG1Gj4EdmGPiQAmSGbvVomOdnWBrwJV3BR9mCFbmQPFZPEsOZgqOglMvKR1Bff5ju00HjRNjRhp";

const HandlePayment = () => {
  const { items, getProductQuantity, getTotalCost } = useContext(CartContext);

  console.log("handle payment page : ", items);
//   const cartItems = items.map(item => {
//     return {
//       item: item.id,
//       name:item.name,
//       qty: item.quantity,
//       price: item.price,  
//       itemCode: `prod-${item.id}`,
//     };
//   });

const cartItems = items.map(item => ({
    id: item.id,  
    name: item.name,
    description: item.description || "No description available", 
    quantity: item.quantity || 1, 
    price: item.price,
    // currency: "usd", 
  }));

  
  console.log("cartItems while doing a payment: ", cartItems);

  const handleCheckout = async () => {
    try {
      const stripe = await loadStripe(public_stripe_key);

      const response = await fetch("http://localhost:4240/create-stripe-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems),
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe session");
      }

      const session = await response.json();
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Error during payment:", error);
      alert("There was an issue with the payment. Please try again later.");
    }
  };

  return (
     <div className="flex items-center justify-center min-h-screen gap-4">
          <div  className="w-[350px] h-[300px] flex flex-col items-center justify-center shadow-xl text-center gap-2 bg-gray-300">       
            {items.length > 0 && (
                  <div className="cart-summary mt-6 text-center">
                    <p className="text-lg font-semibold text-gray-800">
                      Total Payable Amount: ${getTotalCost()}
                    </p>
                    
                  </div>
                )}
            <button
              onClick={() => handleCheckout()} 
              className="px-6 py-3 text-center bg-green-600 rounded-lg cursor-pointer"
            >
              Pay
            </button>
          </div>
     
      </div>
  );
};

export default HandlePayment;
