export const convertToCurrencyValue = (value: number) => {
  return value
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "");
};
