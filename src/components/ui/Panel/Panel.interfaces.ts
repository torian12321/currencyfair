export interface IPanel {
  children:
    | React.ReactElement<IPanelSection>[]
    | React.ReactElement<IPanelSection>;
  className?: string;
}
export interface IPanelSection {
  children?: any;
  className?: string;
  theme?: "dark";
}
