import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { CardContainer, CardFooter, CartButton, CartContainer, CoffeeDetails, CoffeePresentation, ProductAmount, TypeCoffeeContainer } from "./styles"

import coffeeImage from "../../assets/coffee.svg";

export const Card = () => {
  return (
    <CardContainer>
      <CoffeePresentation>
        <img src={coffeeImage} alt="" />
      </CoffeePresentation>
      <TypeCoffeeContainer>
        <span>Tradicional</span>
      </TypeCoffeeContainer>

      <CoffeeDetails>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeDetails>

      <CardFooter>
        <span>R$ <strong>9,90</strong></span>
        <CartContainer>
          <ProductAmount>
            <button>
              <Plus
                size={14}
              />
            </button>
            <span>0</span>
            <button>
              <Minus
                size={14}
              />
            </button>
          </ProductAmount>
          <CartButton>
            <ShoppingCart
              weight="fill"
              size={22}
            />
          </CartButton>
        </CartContainer>
      </CardFooter>
    </CardContainer>
  )
}
