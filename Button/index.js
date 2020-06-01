import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import WithThemeComponent from '@bit/finnovation.kb-dev.with-theme-component';

const FlipAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg)  rotateX(180deg);
  }
`;

const Btn = styled.button`
    display: inline-block;
    width: 86vw;  
    ${props =>
      !props.loading && !props.secondaryBtn && !props.isUPI
        ? `background-color: ${props.theme.primaryColour}`
        : 'background-color: #fff'};
    ${props =>
      !props.loading && props.isUPI
        ? 'background: linear-gradient(to right, #061d2e 0%, #083c6e 100%);'
        : null}
    ${props =>
      props.loading || props.isUPI
        ? 'color:#fff;'
        : `color:${props.theme.buttonTextColour};`}
    height: 48px;
    ${props => (props.noBorderRadius ? null : 'border-radius: 4px;')}
    font-size: ${props => (props.fontSize ? props.fontSize : '1em;')}
    font-weight: 600;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 3%;
    margin-bottom: 3%;
    ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
    outline: none;
    position:relative;
    ${props => (props.loading || props.disabled ? `pointer-events:none;` : '')}
    ${props => (props.disabled ? 'opacity: 0.5;' : null)}
    ${props =>
      props.secondaryBtn
        ? `color: ${
            props.loading ? '' : props.theme.secondaryBtnColour
          };border: 2px solid ${
            props.theme.primaryColour
          };background-color: #fff;`
        : ''}
    ${props => (props.disabled ? `pointer-events:none;` : '')}
    &:after{
            ${props => (props.loading ? `content: ''` : '')};
            width: 20px;
            height: 20px;
            background-color: #191919;
            display: block;
            top: 0;
            position: absolute;
            bottom: 0;
            margin: auto;
            right: 0;
            animation: ${FlipAnimation} 1s infinite;
            left: 0;
        }
        &:before{
            ${props => (props.loading ? `content: ''` : '')};
            background-color:#ffffff;
            position:absolute;
            display:block;
            top:0;
            left:0;
            pointer-events: none;
            border-radius:2px;
            right:0;
            padding:10px;
        }
`;
const Button = props => {
  const { themeData } = props;
  return (
    <Btn {...props} theme={themeData}>
      {props.BtnText}
    </Btn>
  );
};
Button.defaultProps = {
  loading: false,
  disabled: false,
  secondaryBtn: false,
  marginBottom: '',
  fontSize: '',
  noBorderRadius: false,
  isUPI: false,
  BtnText: '',
  themeData: {
    primaryColour: '#fdd535',
    buttonTextColour: '#191919',
    secondaryBtnColour: '#191919',
  },
};
Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  secondaryBtn: PropTypes.bool,
  marginBottom: PropTypes.string,
  fontSize: PropTypes.string,
  noBorderRadius: PropTypes.bool,
  isUPI: PropTypes.bool,
  themeData: PropTypes.object,
  BtnText: PropTypes.string,
};
export default WithThemeComponent(Button);
