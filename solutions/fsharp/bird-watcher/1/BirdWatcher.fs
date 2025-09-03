module BirdWatcher

let lastWeek: int[] =
   [| 0; 2; 5; 3; 7; 8; 4 |]

let yesterday(counts: int[]): int =
   counts[5]

let total(counts: int[]): int =
   counts |> Seq.filter (fun x -> x > 0) |> Seq.sum

let dayWithoutBirds(counts: int[]): bool =
  Array.contains 0 counts

let incrementTodaysCount(counts: int[]): int[] =
    let lastIndex = Array.length counts - 1
    counts.[lastIndex] <- counts.[lastIndex] + 1
    counts

let unusualWeek (counts: int[]) : bool =
    let oddDays  = [ counts.[0]; counts.[2]; counts.[4]; counts.[6] ]
    let evenDays = [ counts.[1]; counts.[3]; counts.[5] ]

    let oddsAll5 = List.forall ((=) 5) oddDays
    let evensAll0 = List.forall ((=) 0) evenDays
    let evensAll10 = List.forall ((=) 10) evenDays

    oddsAll5 || evensAll0 || evensAll10
