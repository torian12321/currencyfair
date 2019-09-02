// import { IconNames, IconSizes } from 'framework/components/ui/Icon';

export interface IButton {
  name?: string;
  caption?: string;
  alt?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: any;
  outline?: boolean;
  // icon?: IconNames;
  // iconSize?: IconSizes;
  type?: 'reset' | 'submit' | 'button';
  form?: string;
}
