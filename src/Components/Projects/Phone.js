import React, { useState } from "react";

const Phone = () => {
  const [url, setUrl] = useState();
  return (
    <div>
      <img src={phone} width="500px" height="300px" alt="phone" />
    </div>
  );
};

export default Phone;
