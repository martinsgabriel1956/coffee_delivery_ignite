import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 10rem;

  h3 {
    padding-bottom: 0.94rem;
  }
`;
export const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.base.card};
  padding: 2.5rem;
`;
export const Explanation = styled.div`
  display: flex;

  gap: 0.5rem;

  margin-bottom: 2rem;

  & span {
    display: flex;
    flex-direction: column;

    &:first-child {
      font-size: 1rem;
    }

    &:last-child {
      font-size: 0.875rem;
    }
  }
`;

export const InputWrapper = styled.div`
  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.base.button};
    padding: 0.75rem;
  }
`;
export const InputContainer = styled.div``;
