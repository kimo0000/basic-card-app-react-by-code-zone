import "./productList.css";

function ProductList(props) {
  // console.log(props.product);
  const {image, title, price, description, category, rating} = props.product;

  return (
    <>
      <li className="card">
        <div className="card_img">
           <img src={image} alt="" />
        </div>
        <div className="card_content">
          <h3>{title}</h3>
          <p className="description">{description}</p>
          <p className="price">Price: <b>{price} $</b></p>
          <div className="cat">
            <p>
              <span>Category: <b> {category}</b></span>
              <br />
              <span>Rate: <b>{rating.rate}</b></span>
              <br />
              <span>Number Disponible: <b>{rating.count}</b></span>
            </p>
          </div>
          <button className="btn_buy">Buy Now</button>
        </div>
      </li>
    </>
  );
}

export default ProductList;