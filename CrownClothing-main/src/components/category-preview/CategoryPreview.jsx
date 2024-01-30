import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../product-card/ProductCard";

import "./categoryPreview.css";

function CategoryPreview(props) {

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const currentUser = useSelector((state) => state.user.value);

  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${props.title}`} className="title">
          {props.title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {props.products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
