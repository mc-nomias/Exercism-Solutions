module InterestIsInteresting

let interestRate (balance: decimal): single =
    match balance with
    | b when b < 0.0m -> 3.213f
    | b when b < 1000.0m -> 0.5f
    | b when b < 5000.0m -> 1.621f
    | b when b >= 5000.0m -> 2.475f
    | _ -> failwith "Invalid balance"

let interest (balance: decimal): decimal =
    balance * decimal (interestRate balance * 0.01f)

let annualBalanceUpdate(balance: decimal): decimal =
   balance + interest balance

let amountToDonate(balance: decimal) (taxFreePercentage: float): int =
    match balance with
    | b when b >= 0.0m -> int (balance * decimal (taxFreePercentage * 0.02))
    | _ -> 0