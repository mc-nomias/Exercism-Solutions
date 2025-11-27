export const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

export function isPangram(text: string) : boolean {
  let result: boolean = true;

  for (let letter of letters) {
    if (!text.toLowerCase().includes(letter.toLowerCase())) {
      result = false;
    }
  }

  return result;
}
