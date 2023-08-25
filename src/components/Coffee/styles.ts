import styled from "styled-components";

export const Container = styled.div`
  width: 16rem;
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 0.375rem 2.25rem;
  text-align: center;

  position: relative;
`;

export const CoffeeImageContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  position: absolute;
  content: "";
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Type = styled.span`
  margin-top: 6rem;
  background: ${({ theme }) => theme.colors.brand.yellow.light};
  color: ${({ theme }) => theme.colors.brand.yellow.dark};
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
  border-radius: 6.25rem;
  display: inline-block;
`;

export const InfoContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2.06rem;
  padding-inline: 1.25rem;

  & > h4 {
    margin-bottom: 0.5rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1.25rem;
  padding-bottom: 1.25rem;
`;
export const Price = styled.span`
  color: ${({ theme }) => theme.colors.base.text};
  font-size: 0.875rem;

  & > strong {
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.types.baloo2.fontFamily};
  }
`;
export const StorageQtd = styled.div`
  background: ${({ theme }) => theme.colors.base.button};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  height: 2.375rem;
  width: 4.5rem;
  border-radius: 0.375rem;

  button {
    background: transparent;
    border: 0;
    width: 0.875rem;
    height: 0.875rem;

    &:first-child {
      margin-left: 0.25rem;
    }
    &:last-child {
      margin-right: 0.25rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > button {
    background: ${({ theme }) => theme.colors.brand.purple.dark};
    border: 0;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
  }
`;
