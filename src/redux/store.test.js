import store from './store.js';

describe('Redux store', () => {
  test('todos is empty initially', () => {
    const todos = store.getState().todos;
    expect(todos).toEqual([]);
  });
});
