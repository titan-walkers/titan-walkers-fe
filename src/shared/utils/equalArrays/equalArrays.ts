export const equalArrays = (array1: unknown[], array2: unknown[]): boolean => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};
