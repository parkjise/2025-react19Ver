type currentProps = {
  value?: number;
  onIncrement: () => void;
};

const Counter = ({ value, onIncrement }: currentProps) => {
  return (
    <div>
      <p>
        현재 카운트 : <span>{value}</span>
      </p>
      <button onClick={onIncrement}>클릭</button>
    </div>
  );
};

export default Counter;
