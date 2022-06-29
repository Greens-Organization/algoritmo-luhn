import { luhnAlgorithm } from "./script.ts";

const cardNumbersIsValids = {
  mastercard: 5426890081836214,
  visa16: 4929198708556404,
  visa13: 4222222222222,
  diners: 30002016374142,
  hipercard: 6062829162746196,
  discover: 6011986497136576,
  jbc: 3572413084974051,
  enRoute: 214946609025834,
  aura: 5066231453783137,
  voyager: 869968389142835,
  americanexpress: 346216553144630,
};

const cardNumberIsNotValids = {
  mastercard: 5555555555554443,
  visa16: 4567890123456789,
  jbc: 3566002020360606,

  generic1: 12345678901234,
  generic2: 14144423224525,
  generic3: 12345678904141,
};

const testingCardsIsValids = {
  masterdcard: luhnAlgorithm(cardNumbersIsValids.mastercard),
  visa16: luhnAlgorithm(cardNumbersIsValids.visa16),
  visa13: luhnAlgorithm(cardNumbersIsValids.visa13),
  diners: luhnAlgorithm(cardNumbersIsValids.diners),
  hipercard: luhnAlgorithm(cardNumbersIsValids.hipercard),
  discover: luhnAlgorithm(cardNumbersIsValids.discover),
  jbc: luhnAlgorithm(cardNumbersIsValids.jbc),
  enRoute: luhnAlgorithm(cardNumbersIsValids.enRoute),
  aura: luhnAlgorithm(cardNumbersIsValids.aura),
  voyager: luhnAlgorithm(cardNumbersIsValids.voyager),
  americanexpress: luhnAlgorithm(cardNumbersIsValids.americanexpress),
};

const testingCardsIsNotValids = {
  mastercard: luhnAlgorithm(cardNumberIsNotValids.mastercard),
  visa16: luhnAlgorithm(cardNumberIsNotValids.visa16),
  jbc: luhnAlgorithm(cardNumberIsNotValids.jbc),

  generic1: luhnAlgorithm(cardNumberIsNotValids.generic1),
  generic2: luhnAlgorithm(cardNumberIsNotValids.generic2),
  generic3: luhnAlgorithm(cardNumberIsNotValids.generic3),
};

console.log("Testando algoritmo para números de cartões validos: \n");
console.log(
  `Mastercard Nº ${cardNumbersIsValids.mastercard} => `,
  testingCardsIsValids.masterdcard
);
console.log(
  `Visa 16 Nº ${cardNumbersIsValids.visa16} => `,
  testingCardsIsValids.visa16
);
console.log(
  `Visa 13 Nº ${cardNumbersIsValids.visa13} => `,
  testingCardsIsValids.visa13
);
console.log(
  `Diners Club Nº ${cardNumbersIsValids.diners} => `,
  testingCardsIsValids.diners
);
console.log(
  `Hipercard Nº ${cardNumbersIsValids.hipercard} => `,
  testingCardsIsValids.hipercard
);
console.log(`JBC Nº ${cardNumbersIsValids.jbc} => `, testingCardsIsValids.jbc);
console.log(
  `enRoute Nº ${cardNumbersIsValids.enRoute} => `,
  testingCardsIsValids.enRoute
);
console.log(
  `Aura Nº ${cardNumbersIsValids.aura} => `,
  testingCardsIsValids.aura
);
console.log(
  `Voyager Nº ${cardNumbersIsValids.voyager} => `,
  testingCardsIsValids.voyager
);
console.log(
  `American Express Nº ${cardNumbersIsValids.americanexpress} => `,
  testingCardsIsValids.americanexpress
);

console.log("\nTestando algoritmo para números de cartões inválidos: \n");
console.log(
  `Mastercard Nº ${cardNumberIsNotValids.mastercard} => `,
  testingCardsIsNotValids.mastercard
);
console.log(
  `Visa 16 Nº ${cardNumberIsNotValids.visa16} => `,
  testingCardsIsNotValids.visa16
);
console.log(
  `JBC Nº ${cardNumberIsNotValids.jbc} => `,
  testingCardsIsNotValids.jbc
);
console.log(
  `Generic 1 Nº ${cardNumberIsNotValids.generic1} => `,
  testingCardsIsNotValids.generic1
);
console.log(
  `Generic 2 Nº ${cardNumberIsNotValids.generic2} => `,
  testingCardsIsNotValids.generic2
);
console.log(
  `Generic 3 Nº ${cardNumberIsNotValids.generic3} => `,
  testingCardsIsNotValids.generic3
);

