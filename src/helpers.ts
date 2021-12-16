export const capitalize = (word: string) =>
  `${word[0].toUpperCase()}${word.slice(1)}`;

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    price
  );

export const slugify = (val: string) =>
  val.trim().toLowerCase().replaceAll(' ', '-');

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const camelCaseToNormal = (
  val: string,
  separator: string,
  shouldCapitalize: boolean
) => {
  let result = '';

  [...val].forEach(char => {
    const lowerCaseChar = char.toLowerCase();

    if (char !== lowerCaseChar) result += `${separator}${char}`;
    else result += char;
  });

  return shouldCapitalize
    ? capitalize(result.toLowerCase())
    : result.toLowerCase();
};

export const kebabCaseToCamelCase = (val: string) =>
  val
    .split('-')
    .map((el, i) => (i === 0 ? el : capitalize(el)))
    .join('');
