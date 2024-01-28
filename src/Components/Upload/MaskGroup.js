import React from "react";

const MaskGroup = ({ className, maskGroup }) => {
  return (
    <div className={className}>
      <img src={maskGroup} alt="Mask Group" />
      {/* Add any additional content or styling as needed */}
    </div>
  );
};

export default MaskGroup;
