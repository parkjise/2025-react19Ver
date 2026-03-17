type UserProps = {
  userAge: number;
  useName: string;
};

const Js10 = ({ userAge, useName }: UserProps) => {
  return (
    <div>
      <h3>이름 : {useName}</h3>
      <p>나이 : {userAge}</p>
    </div>
  );
};

export default Js10;
