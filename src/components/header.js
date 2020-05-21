import React from "react";
import Twitter from "../../content/assets/svgs/twitter.svg";

export const Header = () => (
  <div
    style={{
      display: "flex",
      textTransform: "uppercase",
      marginBottom: "150px",
      justifyContent: "space-between",
    }}
  >
    <div>
      <div>About us</div>
      <div>Donate</div>
    </div>
    <div>
      <Twitter></Twitter>
      <Twitter></Twitter>
      <Twitter></Twitter>
    </div>
  </div>
);
