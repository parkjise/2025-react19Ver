import React, { useState } from "react";

// type Props = {
//   city: {
//     name: string;
//     age: number;
//     city: string;
//     zipcode: string;
//   };
// };

const City = () => {
  const initial = {
    name: "영희",
    age: 25,
    address: {
      city: "서울",
      zipcode: "12345",
    },
  };
  const [userAddress, setUserAddress] = useState(initial);

  const handleCityChange = () => {
    setUserAddress({
      ...userAddress,
      address: {
        ...userAddress.address,
        city: "부산",
      },
    });
  };

  const handleChangeZipcode = () => {
    setUserAddress((prev) => ({
      ...prev,
      address: { ...prev.address, zipcode: "54321" },
    }));
  };

  const handleReset = () => {
    setUserAddress(initial);
  };
  return (
    <div>
      <p>
        {userAddress.name} -{userAddress.address.city}(
        {userAddress.address.zipcode})
      </p>
      <button onClick={handleCityChange}>부산으로 이사하기</button>
      <button onClick={handleChangeZipcode}>Zip code 변경</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

export default City;
