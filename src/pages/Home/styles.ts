import styled from 'styled-components';

import mainCoffeeImage from "../../assets/herocoffee.svg";

export const HomeContainer = styled.main`
`;

export const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
`;

export const MessageContainer = styled.div`
  max-width: 588px;
  width: 100%;
`;

export const AdvantagesContainer = styled.div`
`;

export const CoffeeHero = styled.div`
  width: 29.75rem;
  height: 22.5rem;
  left: calc(50% - 476px/2 + 322px);
  top: calc(50% - 360px/2);

  background: url(${mainCoffeeImage});
`;

export const OurCoffeesSection = styled.section`
  padding-bottom: 9.8125rem;

  h2 {
    margin-bottom: 2.125rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem
`;