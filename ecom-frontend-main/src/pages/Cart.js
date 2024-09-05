
// import React, { useState, useEffect } from 'react';
// import './Cart.css'; // Import CSS for styling

// const Cart = () => {
//   // Initial cart items from local storage or default value
//   const initialCartItems = JSON.parse(localStorage.getItem('cartItems')) || [
//     { id: 1, name: 'Product Name', price: 50.00, quantity: 1, image: '/images/cart.jpg' }
//   ];

//   const [cartItems, setCartItems] = useState(initialCartItems);
//   const [couponCode, setCouponCode] = useState('');
//   const [discount, setDiscount] = useState(0);

//   useEffect(() => {
//     // Save cart items to local storage
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleQuantityChange = (id, newQuantity) => {
//     setCartItems(cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const handleRemoveItem = (id) => {
//     if (window.confirm('Are you sure you want to remove this item from your cart?')) {
//       setCartItems(cartItems.filter(item => item.id !== id));
//     }
//   };

//   const handleCouponApply = () => {
//     // Simple discount logic for demonstration purposes
//     const validCoupons = { 'DISCOUNT10': 10, 'DISCOUNT20': 20 };
//     setDiscount(validCoupons[couponCode.toUpperCase()] || 0);
//   };

//   const handleSaveForLater = (id) => {
//     // Logic to save item for later could be added here
//     alert(`Item ${id} saved for later!`);
//   };

//   const getTotalItems = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     return (total - (total * (discount / 100))).toFixed(2);
//   };

//   return (
//     <div className="cart-container">
//       <h1>Your Shopping Cart</h1>
//       <div className="cart-items">
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cartItems.map(item => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} style={{ height: "200px", width: "250px" }} alt={item.name} />
//               <div className="cart-item-details">
//                 <h2>{item.name}</h2>
//                 <p>Price: ${item.price.toFixed(2)}</p>
//                 <p>
//                   Quantity:
//                   <button onClick={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))}>-</button>
//                   {item.quantity}
//                   <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
//                 </p>
//                 <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
//                 <button className="save-later-btn" onClick={() => handleSaveForLater(item.id)}>Save for Later</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="cart-summary">
//         <h2>Cart Summary</h2>
//         <p>Total Items: {getTotalItems()}</p>
//         <p>Subtotal: ${(cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2))}</p>
//         <p>Discount: {discount}%</p>
//         <p>Total Price: ${getTotalPrice()}</p>
//         <input
//           type="text"
//           placeholder="Enter coupon code"
//           value={couponCode}
//           onChange={(e) => setCouponCode(e.target.value)}
//         />
//         <button onClick={handleCouponApply}>Apply Coupon</button>
//         <button className="checkout-btn">Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useState, useEffect } from 'react';
const Cart=()=>{
  const savedCart=JSON.parse(localStorage.getItem("cart"));
  console.log(savedCart);
  return(
    <div className="container">
      <h1 className='mt-5 mb-5 text-center'>Cart page</h1>
      {
       savedCart?.map((cart)=>(
       <>
       <div className='shadow p-3 mb-5 bg-black rounded'>

<img src={cart.img} alt=""/>
<h3 className=' mt-3'>{cart.title}</h3>
<div className="d-flex justify-content-between">
  <h5>${cart.price}</h5>
  <p>{cart.category}</p>
</div>
       </div>
       </>
       )) 
      }
    </div>
  )
}
export default Cart;


