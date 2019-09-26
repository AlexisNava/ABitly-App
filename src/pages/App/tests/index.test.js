import React from 'react';
import { shallow } from 'enzyme';

// MUI Components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Components
import LinksList from '../../../components/LinksList';

// React App
import App from '../index';

it('Should render the React App', () => {
  shallow(<App />);
});

it('Should render the <LinksList /> component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.contains(<LinksList />)).toBe(true);
});

it('Should render the <Button /> component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Button)).toHaveLength(1);
});

it('Should render the <TextField /> component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(TextField)).toHaveLength(1);
});
