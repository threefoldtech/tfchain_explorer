export default interface IFilterOptions {
  component: unknown;
  chip_label: string;
  label: string;
  items: (value: string) => Promise<(string | number)[]>;
  value: string | string[];
  multiple?: boolean;
  type?: "text" | "number";
  init?: boolean;
  symbol: string;
  getValue?: (filter: IFilterOptions) => any;
}
