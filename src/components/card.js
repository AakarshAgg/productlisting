import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img ,description} = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>Product-{title}</p>
        <p>Sold By-{author}</p>
        <p>Price - {price}Rs</p>
        <p>Description - {description}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
