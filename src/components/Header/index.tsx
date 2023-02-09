import { HeaderContainer, ChooseLocationButton, CartButton, Badge } from "./styles"

import logoImage from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from "phosphor-react";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImage} alt="" />

      <nav>
        <ChooseLocationButton>
          <MapPin
            weight="fill"
            size={18}
          />
          Rio de Janeiro, RJ
        </ChooseLocationButton>
        <CartButton>
          <ShoppingCart
            weight="fill"
            size={18}
          />
          {/* <Badge>0</Badge> */}
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
