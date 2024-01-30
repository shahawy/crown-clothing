import { useParams, useNavigate } from "react-router-dom"; // useParams() hook gives you the access to URL parameters in React component in the form of Object

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addPresentItemsToCart,
  addNewItemsToCart,
} from "../../redux/cartSlice";

import ProductCard from "../../components/product-card/ProductCard";

import { toast, Toaster } from "react-hot-toast";

import "./category.css";

function Category() {
  const { category } = useParams(); // Destructure category property from the object returned from useParams()

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const categories = useSelector((state) => state.categories.items);
  const currentUser = useSelector((state) => state.user.value);

  const [products, setProducts] = useState([]);

  const formattedTitle =
    category === "t-shirts"
      ? category // If the title is "t-shirts", keep it as is
      : category.replace("-", " "); // Replace "-" with space for other titles

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <Toaster />
      <h2 className="category-title">{formattedTitle.toUpperCase()}</h2>
      <div className="category-container">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              productID={product.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Category;
