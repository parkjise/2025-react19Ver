import type { CheckboxProps } from "./types";
const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" id="check" checked={checked} onChange={onChange} />
      알림 받기
    </label>
  );
};

export default Checkbox;
