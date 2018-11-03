/**
 *
 * TextArea
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaHTML } from './styles';

function TextArea(props) {
  return (
    <TextAreaHTML
      rows={props.rows}
      readOnly={props.readOnly}
      value={props.value}
    >
      {props.children}
    </TextAreaHTML>
  );
}

TextArea.propTypes = {
  children: PropTypes.node,
  rows: PropTypes.string,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
};

export default TextArea;
