import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import SEO from "../components/seo";
import Layout from "../layouts/Layout";
import NewsletterThree from "../wrappers/newsletter/NewsletterThree";
import HeroSliderTen from "../wrappers/hero-slider/HeroSliderTen";
import CategoryFourSlider from "../wrappers/category/CategoryFourSlider";
import ShopByBrandSlider from "../wrappers/category/ShopByBrandSlider";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import MyProductSlider from "../wrappers/product/MyProductSlider";
import MySlider from "../wrappers/product/MySlider";
import { useListProductsQuery } from "../store/api/product";
import { setProducts } from "../store/slices/product-slice";
import { store } from "../store/store";
import Loader from "../components/util/Loader";
import Message from "../components/util/Message";

const Home = () => {
  const { data, error, isLoading } = useListProductsQuery();
  store.dispatch(setProducts(data));
  const { products } = useSelector((state) => state.product);

  console.log("Home Data:", data);
  if (isLoading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="py-3">
        <Message variant="danger">{error.message}</Message>
      </div>
    );
  return (
    <Fragment>
      <SEO
        title="The Cage SShop"
        titleTemplate="Home Page"
        description="The Cage SShop, Vapes, E-Liquids, Disposable Vapes, E-Cigarettes."
      />
      <ToastContainer position="top-right" />
      <Layout headerTop="visible">
        {/* hero slider */}
        <HeroSliderTen />
        {/* category */}
        <CategoryFourSlider spaceTopClass="pt-100" spaceBottomClass="pb-40" />
        {/* category */}
        <ShopByBrandSlider spaceTopClass="pt-40" spaceBottomClass="pb-95" />
        {/* pebble product slider */}

        <MyProductSlider
          category="pebble"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Flum Pebble&nbsp;"
        />
        {/* float product slider */}
        <MySlider
          category="float"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Flum Float&nbsp;"
        />
        {/* gio product slider */}
        <MySlider
          category="gio"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Flum Gio&nbsp;"
        />
        {/* os5000 product slider */}
        <MySlider
          category="os5000"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Lost Mary OS5000&nbsp;"
        />
        {/* mo5000 product slider */}
        <MySlider
          category="mo5000"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Lost Mary MO5000&nbsp;"
        />
        {/* mt15000 product slider */}
        <MySlider
          category="mt15000"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Lost Mary MT15000&nbsp;"
        />
        {/* primeBar product slider */}
        <MySlider
          category="primeBar"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Prime Bar 8000&nbsp;"
        />
        
        {/* ultra product slider */}
        <MySlider
          category="ultra"
          spaceBottomClass="pb-70"
          colorClass="product-wrap-8--brown"
          modelName="&nbsp;Elf Bar Ultra BC5000&nbsp;"
        />

       

        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </Layout>
    </Fragment>
  );
};

export default Home;
