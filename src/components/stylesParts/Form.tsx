import React from 'react'
import styled from 'styled-components'

export type FormProps = {
  className?: string
  value?: string
  onSubmit: () => void
}

const Form: React.FC<FormProps> = ({
  className = '',
  value,
  onSubmit,
  children
}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <p>{value}</p>
      {children}
    </StyledForm>
  )
}

export default Form

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 2rem;
  }
  input {
    min-width: 300px;
    max-width: 600px;
    background: #fff;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 2.4rem;
    outline: none;
    height: 4.4rem;
    margin: 0.8rem auto;
    padding: 0.5rem 2rem;
    font-size: 2rem;
    font-weight: bold;
    :hover {
      box-shadow: 0 1px 6px #202124;
      border-color: #dfe1e5;
    }
    :focus {
      box-shadow: 0 1px 6px #202124;
      border-color: #dfe1e5;
    }
  }
  .errMessage {
    font-size: 1.6rem;
    color: red;
  }
`
