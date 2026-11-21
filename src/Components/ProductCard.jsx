import { Button } from "react-bootstrap";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

function ProductCard(objectProduct) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < rating ? "#ffd700" : "#e4e5e9"} />
    ));
  };

  return (
    <div className="card product-card">
      <img src={objectProduct.image} 
      className="card-img-top"
      alt={objectProduct.name}
      style={{width:"250px",height:"300px"}} />
      <p>{objectProduct.name}</p>
      <span>{renderStars(objectProduct.rating)}</span>
      <p><span className="text-decoration-line-through me-2 color-secondary small">{parseFloat(objectProduct.price / 0.90).toFixed(2)}</span><span className="fw-bold">{objectProduct.price}</span><span className="border border-1 text-muted">10% OFF</span></p>
      <div className="footer-card d-none justify-content-center gap-1">
        <input type="number" min={0} defaultValue={0}  />
        <Button className="btn-add"><FaShoppingCart/> Add to Cart</Button>
        <Button className="btn-heart"><FaHeart/></Button>
      </div>
    </div>
  );
}
