import { renderHook } from '@testing-library/react-native';
import useFetch from '../../src/hooks/useFetch';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from '../../src/redux/slices/utilsSlice';
import productsReducer from '../../src/redux/slices/productsSlice';

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

test('invoke useFetch and return default state value', async () => {
  const body = {};
  const url = '';
  const method = 'GET';

  const store = configureStore({
    reducer: {
      utils: isLoadingReducer,
      products: productsReducer,
    },
  });

  const wrapper = ({ children }) => <ReduxProvider reduxStore={store}>{children}</ReduxProvider>;

  const { result } = renderHook(() => useFetch(url, method, body), { wrapper });

  expect(result.current.apiData).toEqual({});
  expect(result.current.serverError).toBeFalsy();
});
