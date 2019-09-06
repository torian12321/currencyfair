export interface ITabs {
  defaultTab?: string;
  children: React.ReactElement<ITabItem>[];
  className?: string;
  showSteps?: boolean;
}

// Types than the users will see
export interface ITabItem {
  id: string;
  label: string;
  children: any;
  className?: string;
  disabled?: boolean;
}

export interface ITab {
  label: string;
  id: string;
  children?: never;
  className?: string;
  onClick?: any;
  disabled?: boolean;
  isActiveTab?: boolean;
  step: number;
}
