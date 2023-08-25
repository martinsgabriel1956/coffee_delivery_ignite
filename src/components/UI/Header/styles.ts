import styled, { css } from "styled-components";

export const Container = styled.header`
  padding-block: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 10rem;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.62rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;

  ${(props) => css`
    color: ${props.theme.colors.brand.purple.dark};
    background-color: ${props.theme.colors.brand.purple.light};
  `}

  & > span {
    color: ${(props) => props.theme.colors.brand.purple.main};
  }
`;

export const CartButton = styled.button`
  background: transparent;
  border: 0;
  border-radius: 0.375rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.brand.yellow.light};
  padding: 0.5rem;

  position: relative;
`;

export const CartBadge = styled.span`
  position: absolute;
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  top: -8px;
  right: -10px;

  color: #fff;
  background-color: ${(props) => props.theme.colors.brand.yellow.dark};

  display: flex;
  align-items: center;
  justify-content: center;
`;
