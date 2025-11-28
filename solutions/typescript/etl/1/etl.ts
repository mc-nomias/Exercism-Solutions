export function transform(list: { [key: string]: string[] }): { [key: string]: number } {
  const result: { [key: string]: number } = {};
  
  for (const [key, values] of Object.entries(list)) {
    for (const item of values) {
      result[item.toLowerCase()] = parseInt(key);
    }
  }

  return result;
}
