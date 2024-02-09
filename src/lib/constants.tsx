export default {};

const currentDate = new Date();
const dateString = currentDate.toString();
let removeGMTOnWards = dateString.split("GMT")[0];
export const trimmedDateString = removeGMTOnWards;

