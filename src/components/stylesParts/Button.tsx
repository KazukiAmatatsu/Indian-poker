import React from 'react'
import styled from 'styled-components'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <StyledButton {...props} />
}

export default Button

export const StyledButton = styled.button`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.buttonColor};
  border: 1px solid ${(props) => props.theme.buttonColor};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 0 1.6rem;
  margin: 1.1rem 0.4rem;
  height: 3.6rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 0.1em;
  border-radius: 0.4rem;

  :hover {
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    border: 1px solid #dadce0;
    color: #202124;
  }
`
