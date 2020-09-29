import React from 'react';
import Pagination from 'react-js-pagination';
import ProductListItem from './product-list-item';

export default class ProductListCategory extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.setView('category', { category: `${this.props.category}` });
  // }

  // shouldComponentDidUpdate() {
  //   this.props.setView('category', { category: `${this.props.category}` });
  // }

  componentDidMount() {
    this.props.getCategory();
  }

  componentDidUpdate() {
    this.props.getCategory();
  }

  render() {
    const { products, activePage, productsPerPage } = this.props;
    const indexOfLastProduct = activePage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageRangeDisplayed = Math.ceil(this.props.totalItemsCount / 9);
    const renderProducts = currentProducts.map((product, index) => {
      return (
        <ProductListItem
          key={product.productId}
          product={product}
          setView={this.props.setView} />
      );
    });
    return (
      <div className="product-list-container col-8 offset-2">
        <div className="pagination-container col-2 offset-5 d-flex justify-content-center">
          <Pagination
            linkClass="page-link shadow-none"
            activeLinkClass="page-link font-weight-bold shadow-none"
            hideFirstLastPages
            activePage={this.props.activePage}
            itemsCountPerPage={9}
            totalItemsCount={this.props.totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={this.props.handlePageChange} />
        </div>
        <div className="col-12 d-flex flex-wrap justify-content-center card-deck m-0">
          {renderProducts}
        </div>
      </div>
    );
  }
}
