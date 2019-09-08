export interface IModal {
  children: any;
  isVisible?: boolean;
  className?: string;
  onDismiss?: () => void;
}
