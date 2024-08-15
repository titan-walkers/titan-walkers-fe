import React from "react";

import Image from "next/image";

type Props = {
  width: number;
  height: number;
};

const IconEmptyProfile = ({ width, height }: Props) => {
  return (
    <Image
      src="/images/header/emptyProfile.gif"
      alt="empty profile"
      width={width}
      height={height}
    />
  );
};

export default IconEmptyProfile;
