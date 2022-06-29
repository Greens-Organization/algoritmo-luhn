Luhn = require("luhn")

-- Há um problema em relação a capturação do Regex em lua quando adicionado o número dentro do código
-- Erro em "[0-9+]" : não captura os números zeros e adiciona o '+' dentro do array
-- O regex apenas é correspondido quando o número é inserido via input
-- Lua 5.2
