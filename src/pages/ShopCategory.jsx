import "./CSS/ShopCategory.css"
import Item from "../components/item/item"
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img src={props.banner} alt="banner" />
      <div>
      <p>
      <span>Showing 1-12</span> out of 36 products</p>
      <div className="shop-category-sort">
      sort by <img src="images (4).png" alt="" />
      
    </div>
    </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
      if (props.category === item.category) {
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        
      } else {
        return null
      }
  
      
        })}
    </div>
      <div className="shopCategory-loadmore">
        Explore more
      </div>
    
    </div>
    
    
  )
}
export default ShopCategory