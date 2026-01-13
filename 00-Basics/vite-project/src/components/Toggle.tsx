type ToggleProps = {
  toggle: boolean;
  onHandleToggle: () => void;
};

const Toggle = ({ toggle, onHandleToggle }: ToggleProps) => {
  return (
    <div>
      <span>{toggle ? "꺼짐상태입니다" : "껴짐 상태입니다"} </span>
      <button onClick={onHandleToggle}>클릭</button>
    </div>
  );
};

export default Toggle;
