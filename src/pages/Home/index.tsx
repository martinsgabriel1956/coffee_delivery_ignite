import { Coffee as CoffeeIcon, Package, ShoppingCart, Timer } from "phosphor-react";
import { Theme } from "../../styles/themes";
import { Badge, Container, HeroContainer, Info, InfoContainer, OurCoffeeContainer } from "./styles";
import { Coffee } from "../../components";
import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";

export function Home() {
  const { data } = useContext(CoffeeContext);

  return (
    <Container>
      <section>
        <InfoContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>
          <div>
            <Info>
              <Badge
                color={Theme.colors.brand.yellow.dark}
              >
                <ShoppingCart
                  size={16}
                  color="#FFF"
                  weight="fill"
                />
              </Badge>
              Compra simples e segura
            </Info>
            <Info>
              <Badge
                color={Theme.colors.base.text}
              >
                <Package
                  size={16}
                  color="#FFF"
                  weight="fill"
                />
              </Badge>
              Embalagem mantém o café intacto
            </Info>
            <Info>
              <Badge
                color={Theme.colors.brand.yellow.main}
              >
                <Timer
                  size={16}
                  color="#FFF"
                  weight="fill"
                />
              </Badge>
              Entrega rápida e rastreada
            </Info>
            <Info>
              <Badge
                color={Theme.colors.brand.purple.main}
              >
                <CoffeeIcon
                  size={16}
                  color="#FFF"
                  weight="fill"
                />
              </Badge>
              O café chega fresquinho até você
            </Info>
          </div>
        </InfoContainer>

        <HeroContainer />
      </section>
      <section>
        <h2>Nossos cafés</h2>

        <OurCoffeeContainer>
          {data.map(coffee => (
            <Coffee
              key={coffee.name}
              description={coffee.description}
              name={coffee.name}
              price={coffee.price}
              quantity={coffee.qtd}
              type={coffee.type}
              image={coffee.image}
            />
          ))}
        </OurCoffeeContainer>
      </section>
    </Container>
  )
}