import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import './kakao.css'
 

const Kakaomap = () => {

    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();
    const [isPostOpen,setIsPostOpen] = useState(true);
    
    const handleComplete = (data) => {
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
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
        setIsPostOpen(false);
      };

 

  const postCodeStyle = {
    display: 'block',
    position: 'relative',
    top: '0%',
    width: '400px',
    height: '400px',
    padding: '7px',
  };

 

  return (
    <>
      {isPostOpen  ? (
         <DaumPostcode style={postCodeStyle} autoClose onComplete={handleComplete} />
      ) : null}
    </>
  );
};

export default Kakaomap;