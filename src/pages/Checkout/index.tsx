import { useForm, FormProvider } from 'react-hook-form';
import { Container, Explanation, FormContainer, InputContainer, InputWrapper } from "./styles";
import { MapPinLine } from 'phosphor-react';
import { Theme } from '../../styles/themes';

export function Checkout() {
  const methods = useForm();

  const handleFinishPurchase = (data: any) => {
    console.log(data);
  }

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleFinishPurchase)}>
          <section>
            <h3>Complete seu pedido</h3>

            <FormContainer>
              <Explanation>
                <MapPinLine
                  size={22}
                  color={Theme.colors.brand.yellow.main}
                />
                <div>
                  <span>Endereço de Entrega</span>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </Explanation>

              <InputWrapper>
                <InputContainer>
                  <input
                    type="text"
                    title='CEP'
                    placeholder='CEP'
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    title='Endereço'
                    placeholder='Endereço'
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    title='Número'
                    placeholder='Número'
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    title='Complemento'
                    placeholder='Complemento'
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    title='Cidade'
                    placeholder='Cidade'
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    title='Estado'
                    placeholder='Estado'
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    title='UF'
                    placeholder='UF'
                    max={2}
                  />
                </InputContainer>
              </InputWrapper>
            </FormContainer>
          </section>
          <section>

          </section>
        </form>
      </FormProvider>
    </Container>
  )
}