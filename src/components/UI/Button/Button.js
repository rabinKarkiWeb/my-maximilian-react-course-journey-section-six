import React from 'react';
import styled from 'styled-components';
import styles from './Button.module.css';

// const Button =styled.button`
//
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #1baaa8;
//     color: white;
//     background: #1baaa8;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
//
//
//   &:focus {
//     outline: none;
//   }
//
//   &:hover,
//   &:active {
//     background: #178b8a;
//     border-color: #178b8a;
//     box-shadow: 0 0 8px rgba(23, 139, 138, 0.25);
//   }
//
//
// `
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
