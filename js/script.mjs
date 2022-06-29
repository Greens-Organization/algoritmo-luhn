// import { createInterface } from "readline/promises";
// import { stdin as input, stdout as output } from "process";
//
// const reading = createInterface({ input, output });
//
// const ans = await reading.question("Entre com um número de cartão: ");

export function luhnAlgorithm(number_card) {
  const cardNumberStr = number_card.toString().split("").reverse();

  let cardNumber = cardNumberStr.map((arr) => parseInt(arr));

  if (cardNumber.length < 13 || cardNumber.length > 16) {
    throw new Error("O número de cartão é inválido");
  }
  for (let i = 1; i <= cardNumber.length - 1; i += 2) {
    cardNumber[i] = cardNumber[i] * 2;
    if (cardNumber[i] > 9) {
      cardNumber[i] = cardNumber[i] - 9;
    }
  }

  const values = cardNumber;
  let res = 0;
  for (let i = 0; i < values.length; i++) {
    res += values[i];
  }
  const validateNumber = res + (res % 10);
  return validateNumber % 10 == 0;
}

// const result = luhnAlgorithm(ans);
// console.log("3. Soma de todos os números");
// console.log(result);
//
// reading.close();
