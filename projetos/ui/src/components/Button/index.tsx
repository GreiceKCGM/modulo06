import React from 'react';
import { ButtonWrapper, ButtonWrapperProps } from './styles/ButtonWrapper';

// const nome: string ='Greice';

interface ButtonBaseProps { 
  type?: "button" | "submit" | "reset";

  
  /**
   * Essa prop usa o disabled padrão do HTML e aplica o CSS junto
   */
  disabled?: boolean;
  /**
   * Passe via children o que deseja renderizar dentro do botão 
   */
  children: React.ReactNode;

  onClick?: React.MouseEventHandler<HTMLButtonElement>

}

 type ButtonProps = ButtonBaseProps & ButtonWrapperProps;

export default function Button({
  type,
  disabled,
  children, 
  color,
  onClick

}: ButtonProps): JSX.Element {
  return (
    <ButtonWrapper 
    type={type} 
    disabled={disabled} 
    color={color} 
    onClick={onClick} 
    >
     [{children}]
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  color: 'primary.main',
  onClick: () => {},


 }

// Button.propTypes = {
//   disabled: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// }
