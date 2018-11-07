/**
 *
 * PageTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './styles';

function PageTitle(props) {
  return <Title>{props.children}</Title>;
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
