import React, { Component } from "react";
import SHOP_DATA from "./Shop.data";
import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import "./Shop.scss";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
