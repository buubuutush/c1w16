// reusable card component
import React from "react";
import styles from "./item.module.css"
const GroceryItem = (prop) => {
  console.log(prop)
  //const {discount,imgURL,mrp,sellingPrice,title}=prop
  return (
  
    <div>
            
            <img src={prop.imgURL}/>
            <p>{prop.title}</p>
            <div className={styles.pricediv}>
                <h4>{prop.mrp}</h4>
                <p>{prop.sellingPrice}</p>
            </div>
                    <p>{prop.discount}</p>
        </div>
 
  )
};
export default GroceryItem;
