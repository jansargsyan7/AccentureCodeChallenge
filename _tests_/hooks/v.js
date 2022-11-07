import { renderHook } from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import useFetch from '../hooks/useFetch';

/*  
  Temporär muss man mit folgenden nervigen Warnings leben: 
   Warnings: React state updates should be wrapped into act(...) 
   Scheint an React zu liegen: 
   - https://github.com/testing-library/react-hooks-testing-library/issues/14
   - https://github.com/facebook/react/issues/14769#issuecomment-474656273
 */

test('useFetch performs GET request', async () => {
  const initialValue = [];
  const mock = new MockAdapter(axios);

  const mockData = 'response';
  const url = 'http://mock';
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() => useFetch(url, initialValue));

  expect(result.current.data).toEqual([]);
  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.data).toEqual('response');
  expect(result.current.loading).toBeFalsy();
});

test('useFetch performs multiple GET requests for different URLs', async () => {
  // fetch 1
  const initialValue = 'initial value';
  const mock = new MockAdapter(axios);

  const mockData = 1;
  const url = 'http://mock';
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() => useFetch(url, initialValue));

  expect(result.current.data).toEqual('initial value');
  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.data).toEqual(1);
  expect(result.current.loading).toBeFalsy();

  // fetch 2
  const url2 = 'http://mock2';
  const mockData2 = 2;
  mock.onGet(url2).reply(200, mockData2);

  const initialValue2 = 'initial value 2';
  const { result: result2, waitForNextUpdate: waitForNextUpdate2 } = renderHook(() =>
    useFetch(url2, initialValue2)
  );

  expect(result2.current.data).toEqual('initial value 2');
  expect(result2.current.loading).toBeTruthy();

  await waitForNextUpdate2();

  expect(result2.current.data).toEqual(2);
  expect(result2.current.loading).toBeFalsy();
});

test('useFetch sets loading to false and returns inital value on network error', async () => {
  const mock = new MockAdapter(axios);

  const initialValue = [];
  const url = 'http://mock';

  mock.onGet(url).networkError();

  const { result, waitForNextUpdate } = renderHook(() => useFetch(url, initialValue));

  expect(result.current.data).toEqual([]);
  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.loading).toBeFalsy();
  expect(result.current.data).toEqual([]);
});
