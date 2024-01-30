import "./checkoutItem.css";

function CheckoutItem(props) {
  const totalItemPrice = Number(props.quantity) * Number(props.price);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={props.image} alt={props.name} />
      </div>
      <span className="name checkout_details">
        <span>{props.name}</span>
        <span>
          Size: <span className="checkout_values">{props.sizes}</span>
        </span>
        <span>
          Color: <span className="checkout_values">{props.color}</span>
        </span>
      </span>
      <span className="quantity">
        <div onClick={props.decreaseQuantity} className="arrow">
          &#8722;
        </div>
        <span className="value">{props.quantity}</span>
        <div onClick={props.increaseQuantity} className="arrow">
          &#43;
        </div>
      </span>
      <span className="price">{totalItemPrice}</span>
      <div onClick={props.clearItem} className="remove-button">
        x
      </div>
    </div>
  );
}

export default CheckoutItem;
