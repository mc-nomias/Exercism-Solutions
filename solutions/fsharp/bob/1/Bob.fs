module Bob

open System

let isUpper (str: string) =
    str |> Seq.exists Char.IsLetter &&
    str |> Seq.filter Char.IsLetter |> Seq.forall Char.IsUpper

let response (input: string): string =
    let adjustedInput = input.Trim()
    if String.IsNullOrWhiteSpace(input) then
        "Fine. Be that way!"
    elif isUpper(input) && Seq.last adjustedInput = '?' then
        "Calm down, I know what I'm doing!"
    elif isUpper(input) then
        "Whoa, chill out!"
    elif Seq.last adjustedInput = '?' then
        "Sure."
    else
        "Whatever."
