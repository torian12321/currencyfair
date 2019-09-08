export interface ILink {
  children?: any;
  caption?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
}
