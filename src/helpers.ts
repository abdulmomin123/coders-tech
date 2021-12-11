export const capitalize = (word: string) =>
  `${word[0].toUpperCase()}${word.slice(1)}`;

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    price
  );
