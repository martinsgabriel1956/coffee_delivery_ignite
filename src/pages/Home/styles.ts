import styled from "styled-components";

import backgroundImg from "../../assets/background.svg";
import coffeeImg from "../../assets/coffeeHero.svg";

interface BadgeProps {
  color: string;
}

export const Container = styled.div`
  & > section {
    padding-inline: 10rem;

    &:first-child {
      background-image: url(${backgroundImg});
      background-size: cover;
      background-repeat: no-repeat;
      height: 34rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding-bottom: 6.75rem;
    }
    &:last-child {
      margin-bottom: 3.37rem;
      padding-top: 2rem;

      & > h2 {
        font-size: 2rem;
        padding-bottom: 3.37rem;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  max-width: 36.75rem;

  & > div:first-child {
    padding-top: 5.87rem;

    & > h1 {
      font-size: 3rem;
      line-height: 130%;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.colors.base.title};
    }

    & > p {
      font-size: 1.25rem;
      line-height: 130%;
      margin-bottom: 4.13rem;
    }
  }

  & > div:last-child {
    display: grid;
    grid-template-areas: "span span" "span span";
    row-gap: 1.25rem;
  }
`;

export const HeroContainer = styled.div`
  height: 22.5rem;
  width: 29.75rem;
  background-image: url(${coffeeImg});
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const Badge = styled.span<BadgeProps>`
  background-color: ${(props) => props.color};
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OurCoffeeContainer = styled.div`
  display: grid;
  grid-template-areas: "span span span span";
  margin-inline: auto;
  row-gap: 2.5rem;
`;
