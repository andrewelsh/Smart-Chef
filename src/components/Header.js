import React from "react";

const Header = () => {
  return (
    <div className="header">
      <p className="headerTitle">Smart Chef</p>
      <div className="headerBottomLine">
        <p className="headerSubTitle">Whats on your shelf ?</p>
        <input placeholder="Add An Item ..."></input>
        <button className="reset"> RESET</button>
      </div>
    </div>
  );
};

export default Header;
