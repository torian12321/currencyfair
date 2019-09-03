export interface IButton {
  children?: never;
  name?: string;
  caption?: string;
  alt?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: any;
  outline?: boolean;
  type?: "reset" | "submit" | "button";
  form?: string;
}

export interface IButtonGroup {
  children: JSX.Element[] | JSX.Element;
  className?: string;
}
