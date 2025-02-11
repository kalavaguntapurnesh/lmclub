import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom";
const public_stripe_key = "pk_test_51QMcn82NPQsjFaoTZ90xF9ORG1Gj4EdmGPiQAmSGbvVomOdnWBrwJV3BR9mCFbmQPFZPEsOZgqOglMvKR1Bff5ju00HjRNjRhp";

const HandlePayment = () => {
  const { items, getProductQuantity, getTotalCost } = useContext(CartContext);
  const navigate = useNavigate();
  console.log("handle payment page : ", items);

  const cartItems = items.map(item => ({
    id: item.id,  
    name: item.name,
    description: item.description || "No description available",
    quantity: item.quantity || 1,
    price: item.price, 
  }));
  
  const handleCheckout = async () => {
    try {
      const stripe = await loadStripe(public_stripe_key);
  
      console.log("Sending cart items:", JSON.stringify(cartItems, null, 2)); 
  
      const response = await fetch("http://localhost:4242/create-stripe-session", {
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
    <div className="flex items-center justify-center min-h-screen px-4">
    <div className="w-full max-w-3xl md:w-[50%] h-auto flex flex-col items-center justify-center shadow-xl text-center gap-4 bg-gray-300 p-6 rounded-lg">
      <h1 className="lg:text-4xl text-3xl font-semibold">Your Payment Details</h1>

      <div className="w-full overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-3 text-left">Plan</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Payable Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border border-gray-300 text-center bg-blue-300">
                <td className="p-3 text-left">{item.name} Membership</td>
                <td className="p-3 text-left">${item.price}</td>
                <td className="p-3 text-left">{item.quantity}</td>
                <td className="p-3 text-left">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {items.length > 0 && (
        <div className="cart-summary mt-4 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Total Payable Amount: ${getTotalCost()}
          </p>
        </div>
      )}

<div className="flex justify-between w-full mt-6">
          <button
            onClick={() => navigate(-1)} 
            className="px-6 py-3 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition"
          >
            Back
          </button>
          
          <button
            onClick={() => handleCheckout()}
            className="px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition"
          >
            Pay
          </button>
        </div>
    </div>
  </div>
  );
};

export default HandlePayment;
