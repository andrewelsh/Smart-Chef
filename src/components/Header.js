import React from "react";
// <input id="searchBar" placeholder="Add An Item ..." />

const Header = (props) => {
  console.log(props.x);
  return (
    <div className="header">
      <p className="headerTitle">Smart Chef</p>
      <div className="headerBottomLine">
        <p className="headerSubTitle">Whats In Your Fridge ?</p>
      </div>
    </div>
  );
};

export default Header;
