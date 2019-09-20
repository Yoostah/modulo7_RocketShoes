import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);
  const currentStock = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const requiredQuantity = currentAmount + 1;

  if (requiredQuantity > currentStock) {
    toast.error('Este produto não possui estoque suficiente!');
    return;
  }

  if (productExists) {
    const newAmount = productExists.amount + 1;

    yield put(updateAmountSuccess(id, newAmount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Este produto não possui estoque suficiente!');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/CHANGE_AMOUNT_REQUEST', updateAmount),
]);
