import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { ProductList } from './style';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const produtos = await api.get('products');

    const data = produtos.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct(product) {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);
