import type { ChangeEventHandler } from "react";
export type CheckboxProps = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type SummaryProps = { checked: boolean };
