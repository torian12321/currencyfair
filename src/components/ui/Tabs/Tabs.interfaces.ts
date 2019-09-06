export interface ITabs {
  children: React.ReactElement<ITabTab>[] | React.ReactElement<ITabTab>;
  className?: string;
}

export interface ITabTab {
  id: string;
  children?: any;
  className?: string;
}
