import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import './kakao.css'
 

const Kakaomap = ({ history }) => {

  const [location, setLocation] = useState(null);
  const [zipcode, setZip] = useState(null);
  const [select, setSelect] = useState(false);


  const handleSelectZip = () => {
    setSelect(true);
  };

  const handleAddress = (data) => {
    setSelect(false);

    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setZip(data.zonecode);
    setLocation(fullAddress);
    history.setAddress(fullAddress)
  };

  return (
    <div className="priceCalculator">
        <div className="location">
          <div
            className={"search" + (location ? " selected" : "")}
            onClick={handleSelectZip}
          >
            <span>{location ? location : "주소 검색하기"}</span>{" "}
            <div className="tag" />
          </div>
        </div>
      <div
        className="postSelect"
        style={{
          display: select ? "flex" : "none",
        }}
      >
        <DaumPostcode
          onComplete={handleAddress}
          style={{
            width: "360px",
            height: "480px",
          }}
        />
      </div>
    </div>
  );
};

export default Kakaomap;