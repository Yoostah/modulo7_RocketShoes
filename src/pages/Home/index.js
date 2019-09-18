import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './style';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-couro-cavalera-marcos-masculino/06/D81-0810-006/D81-0810-006_detalhe2.jpg?ims=326x"
          alt="Produto"
        />
        <strong>Tênis muito Legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-couro-cavalera-marcos-masculino/06/D81-0810-006/D81-0810-006_detalhe2.jpg?ims=326x"
          alt="Produto"
        />
        <strong>Tênis muito Legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-couro-cavalera-marcos-masculino/06/D81-0810-006/D81-0810-006_detalhe2.jpg?ims=326x"
          alt="Produto"
        />
        <strong>Tênis muito Legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-couro-cavalera-marcos-masculino/06/D81-0810-006/D81-0810-006_detalhe2.jpg?ims=326x"
          alt="Produto"
        />
        <strong>Tênis muito Legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-couro-cavalera-marcos-masculino/06/D81-0810-006/D81-0810-006_detalhe2.jpg?ims=326x"
          alt="Produto"
        />
        <strong>Tênis muito Legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/sapatenis-couro-cavalera-marcos-masculino/06/D81-0810-006/D81-0810-006_detalhe2.jpg?ims=326x"
          alt="Produto"
        />
        <strong>Tênis muito Legal</strong>
        <span>R$99,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
