import React from 'react'
import styled from 'styled-components'
import { sp, tab } from 'media'

export type ModalProps = {
  className?: string
  isOpen: boolean
  closed: () => void
  size: 'small' | 'middle' | 'large'
}

const Modal: React.FC<ModalProps> = ({
  className = '',
  isOpen,
  closed,
  size,
  children
}) => {
  if (isOpen) {
    return (
      <StyleOverlay
        className="fadeIn flex center column w-full h-full"
        onClick={closed}
      >
        <StyleModal
          className={`flex center column ${size} ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </StyleModal>
      </StyleOverlay>
    )
  } else {
    return null
  }
}

export default Modal

const StyleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation: fadeIn 0.25s;
  }
`
const StyleModal = styled.div`
  width: 70%;
  max-height: 70%;
  background-color: #fff;
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  border: 1px solid #dadce0;
  color: #202124;
  z-index: 99;
  &.small {
    height: 30%;
    max-height: 30%;
  }
  &.middle {
    height: 50%;
    max-height: 50%;
  }
  &.large {
    height: 70%;
    max-height: 70%;
  }
  ${tab`
    width: 80%;
  `}
  ${sp`
    width: 90%;
  `}
`
