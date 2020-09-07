// eslint-disable-next-line func-names
export default function (amount, symbol) {
  return `${symbol}${amount.toFixed(2)}`;
}
