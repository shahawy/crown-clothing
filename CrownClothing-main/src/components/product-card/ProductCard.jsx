import { useNavigate } from "react-router-dom";

import "./productCard.css";

function ProductCard(props) {
  const navigate = useNavigate()
  return (
    <div className="product-card-container" onClick={() => navigate(`/shop/product/${props.productID}`)}>
      <img loading="lazy" src={props.image} alt="product-image" />
      <div className="footer">
        <span className="name">{props.name}</span>
        <span className="price" style={{width:"fit-content"}}>{props.price} LE</span>
      </div>
    </div>
  );
}

export default ProductCard;
