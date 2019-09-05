type TCurrency = "euro" | "gbp";

export interface ICurrencyBadget {
  currency: TCurrency;
  className?: string;
}
