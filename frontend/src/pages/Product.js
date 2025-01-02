import React, { Fragment } from "react"; 
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../wrappers/product/RelatedProductSlider";
import ProductImageDescription from "../wrappers/product/ProductImageDescription";

const Product = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const product = products.find(product => product.id === Number(id));
  console.log("ID: ", id);
  console.log("Product: ", product);
  console.log("Products: ", products);
  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of The Cage Online SShop Online | Vape and Smoke Accessories."
      />

      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Shop Product", path: process.env.PUBLIC_URL + pathname }
          ]} 
           backgroundImage="https://the-cage-online-assets.s3.us-west-1.amazonaws.com/build/breadcrumb-light.png"
        />      
        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />      
        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        />
      </Layout>
    </Fragment>
  );
};

export default Product;
