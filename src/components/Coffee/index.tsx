import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ButtonContainer, CoffeeImageContainer, Container, Footer, InfoContainer, Price, StorageQtd, Type } from "./styles";
import { useState } from "react";
import { Theme } from "../../styles/themes";
import { convertToCurrencyValue } from "../../utils/convertToCurrencyValue";

interface CoffeeProps {
  name: string;
  description: string;
  price: number;
  url?: string;
  quantity: number;
  type: {
    id: number;
    name: string;
  }[]
  image?: string
}

export function Coffee({ name, description, price, type, quantity, image }: CoffeeProps) {
  const [coffeeQtd, setCoffeeQtd] = useState(0);

  function handleIncreaseCoffeeQtd() {
    setCoffeeQtd(prevState => {
      if (prevState >= quantity) {
        return prevState;
      }

      return prevState + 1;
    });
  }

  function handleDecreaseCoffeeQtd() {
    setCoffeeQtd(prevState => {
      const withoutItems = prevState === 0;

      if (withoutItems) {
        return prevState;
      }

      return prevState - 1;
    });
  }

  return (
    <Container>
      <div>
        <CoffeeImageContainer>
          <img src={image} alt={`Imagem do café ${name}`} />
        </CoffeeImageContainer>
        {type.map(item => (
          <Type
            key={item.id}
          >
            {item.name}
          </Type>
        ))}
      </div>
      <InfoContainer>
        <h4>{name}</h4>
        <span>{description}</span>
      </InfoContainer>

      <Footer>
        <Price>R$<strong>{convertToCurrencyValue(price)}</strong></Price>

        <ButtonContainer>
          <StorageQtd>
            <button
              type="button"
              title="Remove item from Cart"
              onClick={handleDecreaseCoffeeQtd}
            >
              <Minus
                size={14}
                weight="fill"
                color={Theme.colors.brand.purple.main}
              />
            </button>
            <span>{coffeeQtd}</span>
            <button
              type="button"
              title="Add item to Cart"
              onClick={handleIncreaseCoffeeQtd}
            >
              <Plus
                size={14}
                weight="fill"
                color={Theme.colors.brand.purple.main}
              />
            </button>
          </StorageQtd>
          <button
            title="Add to Cart"
            type="button"
          >
            <ShoppingCart
              size={22}
              weight="fill"
              color="#FFF"
            />
          </button>
        </ButtonContainer>
      </Footer>
    </Container>
  )
}