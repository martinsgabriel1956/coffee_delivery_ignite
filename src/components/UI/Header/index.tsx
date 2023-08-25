import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin } from "phosphor-react";
import { CartBadge, CartButton, Container, Location, NavContainer } from "./styles";
import { Cart } from "../Cart";
import { Logo } from "../Logo";
import { CartContext } from "../../../context/CartContext";

export function Header() {
  const { totalItems } = useContext(CartContext);
  const redirect = useNavigate();

  function handleRedirectToCart() {
    return redirect("/checkout")
  }

  return (
    <Container>
      <Link
        to="/"
      >
        <Logo />
      </Link>
      <NavContainer>
        <Location>
          <MapPin
            size={22}
            weight="fill"
          />
          <span>Rio de Janeiro, RJ</span>
        </Location>
        <CartButton
          onClick={handleRedirectToCart}
        >
          <Cart />
          {totalItems > 0 && (
            <CartBadge>
              {totalItems}
            </CartBadge>
          )}
        </CartButton>
      </NavContainer>
    </Container>
  );
}