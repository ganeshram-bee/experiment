import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const HelloWorld = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

export default HelloWorld;
