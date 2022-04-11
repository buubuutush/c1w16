// reusable card component
import React from "react";
import styles from "./item.module.css"
import CartButton from "./CartButton";


const GroceryItem = (prop) => {
  console.log(prop)
  //const {discount,imgURL,mrp,sellingPrice,title}=prop
  return (
  
    <div className= {styles}>
            
            <img src={prop.imgURL}/>
            <p>{prop.title}</p>
            <p>{prop.discount}</p>
            <div className={styles.pricediv}>
                <h4>{prop.mrp}</h4>
                <p>{prop.sellingPrice}</p>
            </div>
                 <CartButton/>   
        </div>
 
  )
};
export default GroceryItem;
