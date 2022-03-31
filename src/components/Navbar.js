import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

function Navbar() {
  //useSelector to get the details from the store, the store has cart from configureStore and also has the createSlice that has the initialState obj and the name
  const { cart:{amount} } = useSelector((store) => store);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
