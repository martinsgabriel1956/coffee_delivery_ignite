import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: ${props => props.theme.colors['base-card']};

  border-radius: 6px 36px;
  max-width: 16rem;
  padding-inline: 1.25rem;
`;

export const CoffeePresentation = styled.div`
  margin-top: -20px;
`;

export const TypeCoffeeContainer = styled.div`
  span {
    display: inline-block;
    background-color: ${props => props.theme.colors["brand-yellow-light"]};
    color: ${props => props.theme.colors["brand-yellow-dark"]};
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;

    margin-top: 0.75rem;
    margin-bottom: 1rem;
  }
`;

export const CoffeeDetails = styled.div`
  h3 {
    color: ${props => props.theme.colors["base-subtitle"]};
  }

  p {
    color: ${props => props.theme.colors["base-label"]};
    font-weight: 400;
    font-size: 0.875rem;
  }

  margin-bottom: 2.0625rem;
`;

export const CardFooter = styled.footer`
  color: ${props => props.theme.colors["base-text"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4375rem;

  padding-bottom: 1.25rem;

  span {
    font-size: 0.875rem;
    line-height: 1.1375rem;

    strong {
      font-size: 1.5rem;
      line-height: 1.95rem;
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  background-color: ${props => props.theme.colors["base-button"]};
  border-radius: 6px;
  padding: 0.5rem;
  width: 4.5rem;

  font-size: 1rem;
  color: ${props => props.theme.colors["base-title"]};
  text-align: center;

  button {
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors["brand-purple"]};

    display: flex;
  }
`;

export const CartButton = styled.button`
  color: ${props => props.theme.colors['base-card']};
  background-color: ${props => props.theme.colors["brand-purple-dark"]};
  border: 0;
  padding: 0.5rem;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
`;