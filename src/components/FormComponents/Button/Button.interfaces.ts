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
  type?: 'reset' | 'submit' | 'button';
  form?: string;
}

export interface IButtonList {
  children: any;
  className?: string;
}
