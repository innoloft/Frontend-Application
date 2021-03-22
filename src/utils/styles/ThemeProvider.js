import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

const ThemeContextProvider = props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContextProvider;
