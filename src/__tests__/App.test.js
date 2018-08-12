import React from 'react';
import ReactDom from 'react-dom';
import App from '../App';
import NewsItem from '../NewsItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});

it('renders ul after fetching', () => {
  const newList = document.createElement('ul');
  ReactDom.render(<NewsItem />, newList);
  ReactDom.unmountComponentAtNode(newList);
});
