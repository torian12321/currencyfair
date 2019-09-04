import { ReactNode } from "react";

export interface IPanel {
  children?: ReactNode | ReactNode[];
  className?: string;
}
export interface IPanelSection {
  children?: any;
  className?: string;
}
