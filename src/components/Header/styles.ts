import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-block: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const ChooseLocationButton = styled.button`
  background-color: ${props => props.theme.colors["brand-purple-light"]};
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  color: ${props => props.theme.colors["brand-purple-dark"]};
  font-size: 0.875rem;
  line-height: 130%;

  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CartButton = styled.button`
  border: 0;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors["brand-yellow-light"]};
  color: ${props => props.theme.colors["brand-yellow-dark"]};
  display: flex;

  position: relative;
`;

export const Badge = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${props => props.theme.colors["brand-yellow-dark"]};
  color: ${props => props.theme.colors["base-white"]};

  border-radius: 50%;
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;

