export function toRna(text: string): string {
  const rnaMapping: { [key: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };

  let rna: string = "";
  for (const nucleotide of text) {
    if (nucleotide in rnaMapping) {
      rna += rnaMapping[nucleotide];
    } else {
      throw "Invalid input DNA.";
    }
  }

  return rna;
}