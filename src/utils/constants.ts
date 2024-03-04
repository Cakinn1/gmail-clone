export default {};

const currentDate = new Date();
const dateString = currentDate.toString();
let removeGMTOnWards = dateString.split("GMT")[0];
export const trimmedDateString = removeGMTOnWards;

export function handleUpperCase(str: string): string {
  const words: string[] = str.split(" ");
  let result = [];
  for (let str of words) {
    result.push(str[0].toUpperCase() + str.slice(1));
  }
  return result.join(" ");
}
