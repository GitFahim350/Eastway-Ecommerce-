import React from 'react'
import Category from './Category'
import { categories } from './data';


const CategoryList = () => {
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            
            {
                
                categories.map((item)=>
                    <Category key={item.id} item={item}></Category> 
                )
            }
        </div>
    )
}

export default CategoryList
