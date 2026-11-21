import { Button } from "react-bootstrap";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

function ProductCard({objectProduct}) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < rating ? "#ffd700" : "#e4e5e9"} />
    ));
  };

  return (
    
    <div className="card product-card my-5 py-3 ">
      <img src={objectProduct.image} 
      className="card-img-top mx-auto"
      alt={objectProduct.name}
      style={{height:"200px" , width:"70%", objectFit:"contain"}} />
      <p>{objectProduct.name}</p>
      <span>{renderStars(objectProduct.rating)}</span>
      <p><span className="text-decoration-line-through me-2 text-secondary small">${parseFloat(objectProduct.price / 0.90).toFixed(2)}</span><span className="fw-bold">${(objectProduct.price).toFixed(2)} </span><span className="border border-1 text-muted ms-2">10% OFF</span></p>
      <div className="footer-card opacity-0">
        <input type="number" min={0} defaultValue={0} style={{width:"30%" , border:"1px solid",borderRadius:"5px"}}/>
        <Button className="btn-add px-md-1 px-5"><FaShoppingCart/> Add to Cart</Button>
        <Button className="btn-heart"><FaHeart/></Button>
      </div>
    </div>
  );
}
export default ProductCard;
