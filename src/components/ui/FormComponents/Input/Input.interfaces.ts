export interface IInput {
  children?: never;
  name?: string;
  caption?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onChange?: any;
  // type?: "reset" | "submit" | "button";
  form?: string;
}
