import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPresentItemsToCart,
  addNewItemsToCart,
} from "../../redux/cartSlice";
import "./singleProduct.css";
import SHOP_DATA from "../../shop-data";
import Spinner from "../../components/spinner/Spinner";
import Button from "../../components/button/Button";
import { toast, Toaster } from "react-hot-toast";

function SingleProduct() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.value);
  const cartItems = useSelector((state) => state.cart.value);
  const [singleProduct, setSingleProduct] = useState({});
  const [sizeChosen, setSizeChosen] = useState("");
  const [colorChosen, setColorChosen] = useState("");

  const addToCartClick = (productData) => {
    if (currentUser) {
      if (sizeChosen && colorChosen) {
        const existingProduct = cartItems.find(
          (product) => product?.id === productData.id
        );

        if (existingProduct) {
          dispatch(
            addPresentItemsToCart({
              ...productData,
              color: colorChosen,
              sizes: sizeChosen
            })
          );
        } else {
          dispatch(
            addNewItemsToCart({
              ...productData,
              color: colorChosen,
              sizes: sizeChosen
            })
          );
        }

        toast.success(productData.name + " added to cart");
      } else {
        if (!sizeChosen && !colorChosen) {
          toast.error("Please choose Size and Color");
        } else if (!sizeChosen) {
          toast.error("Please choose Size");
        } else if (!colorChosen) {
          toast.error("Please choose Color");
        }
      }
    } else {
      navigate("/authentication");
    }
  };

  useEffect(() => {
    const allProducts = SHOP_DATA.map((category) => category.items).flat();
    const foundItem = allProducts.find((item) => item.id === Number(productID));
    if (foundItem) {
      setSingleProduct(foundItem);
    }
  }, [productID]);

  return (
    <div className="single_product_container">
      <Toaster />
      {Object.keys(singleProduct).length > 0 ? (
        <>
          <div className="image_container">
            <img
              className="product_image"
              src={singleProduct.imageUrl}
              alt="product image"
            />
          </div>

          <div className="description_container">
            <h3 className="product_heading">{singleProduct.description}</h3>

            <p className="product_details">
              <span className="details_description">Product Name:</span>{" "}
              <span className="details_value">{singleProduct.name}</span>
              <span className="details_quantity">({singleProduct.quantity} pieces left in the stock)</span>
            </p>
            <p className="product_details">
              <span className="details_description">Price:</span>{" "}
              <span className="details_value">
                {singleProduct.price} LE{" "}
                <span style={{ fontWeight: "bold" }}>( including VAT)</span>
              </span>
            </p>
            <p className="product_details">
              <span className="details_description">Sizes:</span>{" "}
              <span className="details_value">
                {singleProduct?.sizes?.map((size, index) => {
                  return (
                    <button
                      className="details_button"
                      style={{ backgroundColor: sizeChosen === size && "grey" }}
                      key={index}
                      onClick={() => setSizeChosen(size)}
                    >
                      {size}
                    </button>
                  );
                })}
              </span>
            </p>
            <p className="product_details">
              <span className="details_description">Colors:</span>{" "}
              <span className="details_value">
                {singleProduct?.color?.map((color, index) => {
                  return (
                    <button
                      className="details_button"
                      style={{
                        backgroundColor: colorChosen === color && color,
                        color: colorChosen === color && colorChosen === "Black" ? "white" : "black"
                      }}
                      key={index}
                      onClick={() => setColorChosen(color)}
                    >
                      {color}
                    </button>
                  );
                })}
              </span>
            </p>
            <p className="product_details">
              <span className="details_description">Material:</span>{" "}
              <span className="details_value">
                {singleProduct.materialType}
              </span>
            </p>

            <Button
              onClick={() => addToCartClick(singleProduct)}
              buttonName="Add To Cart"
              buttonType="inverted"
              style={{ marginTop: "30px" }}
            />
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default SingleProduct;
