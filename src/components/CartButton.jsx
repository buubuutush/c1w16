import { useState } from "react";
import styles from "./cart.module.css"
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count,setcount]=useState(0)

    const dec=()=>{
      setcount((prevstate)=>prevstate+1)
    }

    const inc=()=>{
      setcount((prevstate)=>prevstate-1)
    }

  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div className={styles.div}>
      <button onClick={inc}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={dec}>+</button>
  </div>
  </>;
};
export default CartButton
