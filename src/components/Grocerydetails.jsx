import React from "react"
import data from '../data.json'
import styles from "./details.module.css"
import GroceryItem from "./GroceryItem"
//console.log(GroceryItem)
const GroceryDetails = () => {
    //console.log(data)

    return (
        <>
            <div className={styles.headerdiv}>
                <h1>Groceries</h1>
            </div>
          
            <div className="container">
                {/* map through the data and display the cards */}
                {/* {
                    data.map((elem,i)=>{
                      //  console.log(elem);
                        <GroceryItem {...elem}/>
                    })
                } */}
               
               {
                    data.map((elem,i)=>{
                      //  console.log(elem);
                       return <GroceryItem {...elem}/>
                    })
                }
            </div>
        </>
    )
}
export default GroceryDetails