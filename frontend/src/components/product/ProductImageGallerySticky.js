import PropTypes from "prop-types";


const productImageGallerySticky = ({ product }) => {
  return (
    <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
      {product.discount || product.new ? (
        <div className="product-img-badges">
          {product.discount ? (
            <span className="pink">-{product.discount}%</span>
          ) : (
            ""
          )}
          {product.new ? <span className="purple">New</span> : ""}
        </div>
      ) : (
        ""
      )}
      <div className="product-sticky-image mb--10">
        {product?.image?.map((single, key) => (
          <div className="product-sticky-image__single mb-10" key={key}>
            <img
              src={single}
              alt=""
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

productImageGallerySticky.propTypes = {
  product: PropTypes.shape({})
};

export default productImageGallerySticky;
