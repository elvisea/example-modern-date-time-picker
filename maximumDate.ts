import { addDays, differenceInDays } from "date-fns";

export const maximumDate = (now: Date, start: Date, interval: number): Date => {
  const difference = differenceInDays(now, start);
  if (difference < interval) return new Date();
  if (difference >= interval) return addDays(start, interval);
  return new Date();
};
