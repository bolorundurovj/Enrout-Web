/**
 * It takes an object and returns an array of its values
 * @param {any} obj - any - The object to convert to an array.
 * @returns An array of the values of the object.
 */
export const enumAsArray = (obj: any) => {
  return Object.values(obj);
}

/**
 * We generate a random number between 0 and 16777215, convert it to a hex string, and pad it with zeros to make it 6
 * characters long
 * @returns A random hex color code
 */
export const generateHex = (): string => {
  const maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  const randomNumberStr = randomNumber.toString(16);
  const randColor = randomNumberStr.padStart(6);
  return `#${randColor.toUpperCase()}`
}

/**
 * It takes an array of strings and returns an object with the strings as keys and random hex values as values
 * @param {string[]} arr - string[] - an array of strings that you want to map to a color
 */
export const getColorMapping = (arr: string[]) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    obj[arr[i]] = generateHex()
  }

  return obj;
}
