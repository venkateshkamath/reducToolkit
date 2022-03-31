import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  // get the relevant state, that is the initial One
  const { isModalOpen } = useSelector((store) => store.modal);

  // while change in cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  // Initial Loading

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
