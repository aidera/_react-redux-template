export const delay = (ms: number): Promise<any> =>
  new Promise((res) => setTimeout(res, ms));

export const numberWithSpaces = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const getFileExtension = (fileName: string): string | null => {
  const splitName = fileName.split(".");
  if (splitName[1]) {
    const arrLength = splitName.length;
    return splitName[arrLength - 1].trim().toLowerCase();
  }
  return null;
};
