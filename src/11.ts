import { Math } from 'mathjs';

export const sum = (a: number, b: number) => {
  return Math.add(a, b);
};

export const difference = (a: number, b: number) => {
  return Math.subtract(a, b);
};

export const product = (a: number, b: number) => {
  return Math.multiply(a, b);
};

export const quotient = (a: number, b: number) => {
  return Math.divide(a, b);
};
