local luhn = {}
io.write("> ")
local res = io.read()

function CardNumber(cardNumber)
    local strNumberCard = tostring(cardNumber)
    Arr = {}
    Index = 0
    for number in string.gmatch(strNumberCard, "[0-9+]") do
        Arr[Index] = number
        Index = Index + 1
    end

    for i = 0, #strNumberCard - 1, 1 do
        print(Arr[i])
    end

    for i = #strNumberCard - 2, 0, -2 do
        Arr[i] = Arr[i] * 2
        if (Arr[i] > 9) then
            Arr[i] = Arr[i] - 9
        end
    end
    local sum = 0
    for i = #strNumberCard - 1, 0, -1 do
        sum = sum + Arr[i]
    end
    local validateNumber = sum + (sum % 10)
    return validateNumber % 10 == 0
end

print(CardNumber(res))

return luhn
