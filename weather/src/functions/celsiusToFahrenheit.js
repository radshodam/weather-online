export const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(2));
};