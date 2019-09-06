export interface ILink {
  caption: string;
  to: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
}
