import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

describe('The <App /> component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
