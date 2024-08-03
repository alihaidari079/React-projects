import React, { useContext } from 'react'
import './Css/shopCategory.css'
import { ShopContext } from '../context/Shopcontext'
import dropdonw_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Items/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shop-index">
        <p>
          <span>Shoding 1-12</span> out of 36 products
        </p>
        <div className='shop-drop'>
          Sort by <img src={dropdonw_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if(props.category === item.category) {
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
