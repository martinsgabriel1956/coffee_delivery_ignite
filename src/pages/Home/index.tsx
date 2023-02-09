import { Card } from "../../components/Card"
import { AdvantagesContainer, CardContainer, CoffeeHero, HomeContainer, MainSection, MessageContainer, OurCoffeesSection, TextContainer } from "./styles"

export const Home = () => {
  return (
    <HomeContainer>
      <MainSection>
        <TextContainer>
          <MessageContainer>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </MessageContainer>
          <AdvantagesContainer>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
            <div>
              <img src="" alt="" />
              <span></span>
            </div>
          </AdvantagesContainer>
        </TextContainer>
        <CoffeeHero>
        </CoffeeHero>
      </MainSection>
      <OurCoffeesSection>
        <h2>Nossos cafés</h2>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </OurCoffeesSection>
    </HomeContainer>
  )
}
